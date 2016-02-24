json.user do
  json.email      @user.email
  json.firstname  @user.firstname
  json.lastname   @user.lastname


  json.crawls(@user.crawls) do |crawl|
    json.extract! crawl, :id, :name, :description
    json.start_address crawl.hops[0].bar.address

    json.hops(crawl.hops) do |hop|
      json.extract! hop.bar, :name, :address, :city, :province, :phone_number, :website, :price
    end
  end
end