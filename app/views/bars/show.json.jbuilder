json.bar do
  json.extract! @bar, :id, :name, :address, :city, :province, :website, :phone_number, :price, :lat, :lng

  json.crawls(@bar.crawls) do |crawl|
    json.extract! crawl, :id, :name, :description, :tags, :user_id
    json.start_address crawl.hops[0].bar.address
    json.rating crawl.average_rating

    json.hops(crawl.hops) do |hop|
      json.extract! hop.bar, :id, :name, :address, :city, :province, :phone_number, :website, :price
    end
  end

end

json.tags(@tags) do |tag|
  json.extract! tag, :name, :id
end