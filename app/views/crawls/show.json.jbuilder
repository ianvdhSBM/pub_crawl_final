json.crawl do
  json.extract! @crawl, :id, :name, :description, :tags
  json.start_address @crawl.hops[0].bar.address
  json.start_lat @crawl.hops[0].bar.lat
  json.start_lng @crawl.hops[0].bar.lng
  json.user @crawl.user

  json.hops(@crawl.hops) do |hop|
    json.extract! hop.bar, :name, :address, :city, :province, :phone_number, :website, :price, :lat, :lng
  end
end

if current_user
  json.user do
    json.extract! @user, :id, :firstname, :lastname, :email
  end
end

json.reviews(@reviews) do |review|
  json.extract! review, :crawl_id, :user_id, :rating, :comment, :user
end

