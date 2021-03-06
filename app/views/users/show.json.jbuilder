json.user do
  json.id           @user.id
  json.email        @user.email
  json.firstname    @user.firstname
  json.lastname     @user.lastname
  json.image        @user.image
  json.created_at   @user.created_at.to_date
  json.provider     @user.provider

  json.crawls(@user.crawls) do |crawl|
    json.extract! crawl, :id, :name, :description, :tags
    json.start_address crawl.hops[0].bar.address
    json.rating crawl.average_rating

    json.user do
      json.firstname crawl.user.firstname
      json.lastname crawl.user.lastname
      json.id crawl.user.id
    end

    json.hops(crawl.hops) do |hop|
      json.extract! hop.bar, :id, :name, :address, :city, :province, :phone_number, :website, :price, :lat, :lng
    end
  end

  json.reviews(@user.reviews) do |review|
    json.extract! review, :id, :comment, :rating
  end
end

json.tags(@tags) do |tag|
  json.extract! tag, :name, :id
end

if @current_user.nil?
  json.current_user do
    json.id  0
  end
else
  json.current_user do
    json.id   @current_user.id

    if @current_user.invites.any?
      json.invites @current_user.invites do |invite|
        json.crawl invite.crawl
        json.name invite.crawl.user.firstname
      end
    end
  end
end
