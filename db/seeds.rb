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

cool = Tag.create!(name: "cool")
beer = Tag.create!(name: "beer")
wine = Tag.create!(name: "wine")
cocktails = Tag.create!(name: "cocktails")
whiskey = Tag.create!(name: "whisk(e)y")
tequila = Tag.create!(name: "tequila")
scotch = Tag.create!(name: "scotch")
vodka = Tag.create!(name: "vodka")
bitters = Tag.create!(name: "bitters")

club = Tag.create!(name: "club")
lounge = Tag.create!(name: "lounge")
dive_bar = Tag.create!(name: "dive bar")
pub = Tag.create!(name: "pub")
brewery = Tag.create!(name: "brewery")
snackbar = Tag.create!(name: "snackbar")
tapas = Tag.create!(name: "tapas")
livemusic = Tag.create!(name: "live music")
pool_billiards = Tag.create!(name: "pool/billiards")
boardgames = Tag.create!(name: "boardgames")
tikibar = Tag.create!(name: "tikibar")
speakeasy = Tag.create!(name: "speakeasy")
sportsbar = Tag.create!(name: "sportsbar")
karaoke = Tag.create!(name: "karaoke")
happyhour = Tag.create!(name: "happy hour")
food = Tag.create!(name: "food")
fancy = Tag.create!(name: "fancy")

user = User.new(
        firstname:             "Ron",
        lastname:              "Swanson",
        email:                 "test@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/ron.jpg")
      )

# user.skip_confirmation!
user.save!


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

crawl = Crawl.new(name: "Cool Crawl", description: "A cool crawl to go on.", user_id: 1)
crawl.save
bars.each_with_index do |bar,index|
  crawl.hops.create(bar: bar, position: index + 1)
end
tags.each do |tag|
  crawl.tags << tag
end

crawl1 = Crawl.new(name: "Very Cool Crawl", description: "A very cool crawl to go on.", user_id: 1)
crawl1.save
bars1.each_with_index do |bar,index|
  crawl1.hops.create(bar: bar, position: index + 1)
end
tags1.each do |tag|
  crawl1.tags << tag
end

crawl2 = Crawl.new(name: "Less Cool Crawl", description: "Not the coolest crawl, but whatever.", user_id: 1)
crawl2.save
bars2.each_with_index do |bar, index|
  crawl2.hops.create(bar: bar, position: index + 1)
end
tags2.each do |tag|
  crawl2.tags << tag
end
