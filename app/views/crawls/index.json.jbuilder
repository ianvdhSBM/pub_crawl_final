json.crawls(@crawls) do |crawl|
  json.extract! crawl, :name, :description, :bars, :hops
end
