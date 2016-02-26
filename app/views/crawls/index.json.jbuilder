json.crawls(@crawls) do |crawl|
  json.extract! crawl, :id, :name, :description, :tags
  json.start_address crawl.hops[0].bar.address

  json.tags(crawl.tags) do |tag|
    json.extract! tag, :name
  end

  json.hops(crawl.hops) do |hop|
    json.extract! hop.bar, :name, :address, :city, :province, :phone_number, :website, :price, :lat, :lng
  end
end

json.tags(@crawls) do |crawl|
  json.tags(crawl.tags) do |tag|
    json.extract! tag, :name
  end
end

json.tags(@tags) do |tag|
  json.extract! tag, :