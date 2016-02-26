require 'json'

seed_file = File.read("db/bars.json")
json = JSON.parse(seed_file)
json.each {|bar| Bar.create(bar)}
bars = []
bars << Bar.find_by(name: "Horseshoe Tavern")
bars << Bar.find_by(name: "The Cameron House")
bars << Bar.find_by(name: "Nocturne")
bars << Bar.find_by(name: "Tattoo Queen West")

bars1 = []
bars1 << Bar.find_by(name: "The Cameron House")
bars1 << Bar.find_by(name: "Nocturne")
bars1 << Bar.find_by(name: "Tattoo Queen West")

bars2 = []
bars2 << Bar.find_by(name: "Cabal")
bars2 << Bar.find_by(name: "Gladstone Hotel")
bars2 << Bar.find_by(name: "Buca")
bars2 << Bar.find_by(name: "Cadillac Lounge")
bars2 << Bar.find_by(name: "Spice Route")

cool = Tag.new(name: "cool")
beer = Tag.new(name: "beer")
wine = Tag.new(name: "wine")
cocktails = Tag.new(name: "cocktails")
whiskey = Tag.new(name: "whiskey")
tequila = Tag.new(name: "tequila")
scotch = Tag.new(name: "scotch")
vodka = Tag.new(name: "vodka")
bitters = Tag.new(name: "bitters")

club = Tag.new(name: "club")
lounge = Tag.new(name: "lounge")
dive_bar = Tag.new(name: "dive bar")
pub = Tag.new(name: "pub")
brewery = Tag.new(name: "brewery")
snackbar = Tag.new(name: "snackbar")
tapas = Tag.new(name: "tapas")
livemusic = Tag.new(name: "live music")
pool_billiards = Tag.new(name: "pool/billiards")
boardgames = Tag.new(name: "boardgames")
tikibar = Tag.new(name: "tikibar")
speakeasy = Tag.new(name: "speakeasy")
sportsbar = Tag.new(name: "sportsbar")
karaoke = Tag.new(name: "karaoke")
happyhour = Tag.new(name: "happy hour")
food = Tag.new(name: "food")
fancy = Tag.new(name: "fancy")


tags = []
tags << cool
tags << beer
tags << dive_bar
tags << wine

tags1 = []
tags1 << cool
tags1 << wine
tags1 << food
tags1 << lounge

tags2 = []
tags2 << fancy
tags2 << wine
tags2 << food
tags2 << lounge

crawl = Crawl.new(name: "Cool Crawl", description: "A cool crawl to go on.")
crawl.save
bars.each_with_index do |bar,index|
  crawl.hops.create(bar: bar, position: index + 1)
end
tags.each do |tag|
  crawl.tags << tag
end

crawl1 = Crawl.new(name: "Very Cool Crawl", description: "A very cool crawl to go on.")
crawl1.save
bars1.each_with_index do |bar,index|
  crawl1.hops.create(bar: bar, position: index + 1)
end
tags1.each do |tag|
  crawl1.tags << tag
end

crawl2 = Crawl.new(name: "Less Cool Crawl", description: "Not the coolest crawl, but whatever.")
crawl2.save
bars2.each_with_index do |bar, index|
  crawl2.hops.create(bar: bar, position: index + 1)
end
tags2.each do |tag|
  crawl2.tags << tag
end
