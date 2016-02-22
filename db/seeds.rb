require 'json'

seed_file = File.read("db/bars.json")
json = JSON.parse(seed_file)
json.each {|bar| Bar.create(bar)}
bars = []
bars << Bar.find_by(name: "Horseshoe Tavern")
bars << Bar.find_by(name: "The Cameron House")
bars << Bar.find_by(name: "Nocturne")
bars << Bar.find_by(name: "Tattoo Queen West")

crawl = Crawl.new(name: "Cool Crawl", description: "A cool crawl to go on.")
crawl.save
bars.each_with_index do |bar,index|
  crawl.hops.create(bar: bar, position: index + 1)
end
