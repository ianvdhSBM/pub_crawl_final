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

bars3 = []
bars3 << Bar.find_by(name: "Orbit Room")
bars3 << Bar.find_by(name: "Mod Club Theatre")
bars3 << Bar.find_by(name: "Gladstone Hotel")

bars4 = []
bars4 << Bar.find_by(name: "Vagabondo Italian Restaurant + Lounge")
bars4 << Bar.find_by(name: "Pravda Vodka Bar")
bars4 << Bar.find_by(name: "The Reservoir Lounge")
bars4 << Bar.find_by(name: "Canoe")
bars4 << Bar.find_by(name: "TOCA Restaurant")

bars5 = []
bars5 << Bar.find_by(name: "Senses Bakery, Bar & Restaurant")
bars5 << Bar.find_by(name: "Le Sélect Bistro")
bars5 << Bar.find_by(name: "Marben")

bars6 = []
bars6 << Bar.find_by(name: "Tattoo Queen West")
bars6 << Bar.find_by(name: "The Cameron House")
bars6 << Bar.find_by(name: "Gladstone Hotel")
bars6 << Bar.find_by(name: "Cabal")
bars6 << Bar.find_by(name: "Cadillac Lounge")
bars6 << Bar.find_by(name: "The Ossington")

bars7 = []
bars7 << Bar.find_by(name: "The One Eighty")
bars7 << Bar.find_by(name: "Museum Tavern")
bars7 << Bar.find_by(name: "Bar Mercurio")

bars8 = []
bars8 << Bar.find_by(name: "The Reservoir Lounge")
bars8 << Bar.find_by(name: "The Rex Hotel Jazz and Blues Bar")
bars8 << Bar.find_by(name: "The Cameron House")

bars9 = []
bars9 << Bar.find_by(name: "Buca")
bars9 << Bar.find_by(name: "Cadillac Lounge")
bars9 << Bar.find_by(name: "Spice Route")

bars10 = []
bars10 << Bar.find_by(name: "Bloke")
bars10 << Bar.find_by(name: "Spice Route")
bars10 << Bar.find_by(name: "Marcel's Bistro")
bars10 << Bar.find_by(name: "HUSH Restaurant, Bar & Patio")

bars11 = []
bars11 << Bar.find_by(name: "The Reservoir Lounge")
bars11 << Bar.find_by(name: "The Cameron House")
bars11 << Bar.find_by(name: "Horseshoe Tavern")
bars11 << Bar.find_by(name: "The Ossington")
bars11 << Bar.find_by(name: "Gladstone Hotel")

bars12 = []
bars12 << Bar.find_by(name: "Miller Tavern on Bay Street")
bars12 << Bar.find_by(name: "Lee")
bars12 << Bar.find_by(name: "Petit Dejeuner")

bars13 = []
bars13 << Bar.find_by(name: "Amsterdam BrewHouse")
bars13 << Bar.find_by(name: "Spice Route")
bars13 << Bar.find_by(name: "Betty's")
bars13 << Bar.find_by(name: "Vertical")

bars14 = []
bars14 << Bar.find_by(name: "Tattoo Queen West")
bars14 << Bar.find_by(name: "Gladstone Hotel")
bars14 << Bar.find_by(name: "Cabal")
bars14 << Bar.find_by(name: "Horseshoe Tavern")
bars14 << Bar.find_by(name: "The Ossington")
bars14 << Bar.find_by(name: "Nocturne")

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

user1 = User.new(
        firstname:             "Estelle",
        lastname:              "Costanza",
        email:                 "estelle@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/estelle_costanza.jpeg")
      )

# user.skip_confirmation!
user1.save!

user2 = User.new(
        firstname:             "Frank",
        lastname:              "Costanza",
        email:                 "frank@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/frank_costanza.jpg")
      )

# user.skip_confirmation!
user2.save!

user3 = User.new(
        firstname:             "Frank Costanza's",
        lastname:              "Lawyer",
        email:                 "larry@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/frank_costanza_lawyer.jpg")
      )

# user.skip_confirmation!
user3.save!

user4 = User.new(
        firstname:             "Jackie",
        lastname:              "Chiles",
        email:                 "jackie@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/jackie_chiles.jpg")
      )

# user.skip_confirmation!
user4.save!

user5 = User.new(
        firstname:             "Susan",
        lastname:              "Ross",
        email:                 "susan@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/susan_ross.jpg")
      )

# user.skip_confirmation!
user5.save!

user6 = User.new(
        firstname:             "Tim",
        lastname:              "Whatley",
        email:                 "tim@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/tim_watley.jpg")
      )

# user.skip_confirmation!
user6.save!

user7 = User.new(
        firstname:             "Uncle",
        lastname:              "Leo",
        email:                 "uncleleo@test.com",
        password:              "password",
        password_confirmation: "password",
        image:                 File.open(Rails.root + "app/assets/images/uncle_leo.jpg")
      )

# user.skip_confirmation!
user7.save!

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

tags3 = []
tags3 << vodka
tags3 << wine
tags3 << speakeasy
tags3 << happyhour
tags3 << karaoke

tags4 = []
tags4 << bitters
tags4 << wine
tags4 << vodka
tags4 << livemusic

tags5 = []
tags5 << snackbar
tags5 << club
tags5 << lounge
tags5 << fancy
tags5 << tequila

tags6 = []
tags6 << cool
tags6 << cocktails
tags6 << whiskey
tags6 << pub

tags7 = []
tags7 << dive_bar
tags7 << cocktails
tags7 << beer
tags7 << karaoke

tags8 = []
tags8 << livemusic
tags8 << lounge
tags8 << speakeasy
tags8 << scotch

tags9 = []
tags9 << pool_billiards
tags9 << food
tags9 << cocktails
tags9 << wine

tags10 = []
tags10 << tikibar
tags10 << beer
tags10 << tequila
tags10 << club
tags10 << fancy

tags11 = []
tags11 << beer
tags11 << whiskey
tags11 << dive_bar
tags11 << livemusic

tags12 = []
tags12 << beer
tags12 << pub
tags12 << brewery
tags12 << boardgames

tags13 = []
tags13 << brewery
tags13 << beer
tags13 << tapas

tags14 = []
tags14 << bitters
tags14 << tequila
tags14 << tikibar
tags14 << happyhour

crawl = Crawl.new(name: "Ron's Coolest Crawl", description: "Give a man a fish, and you feed him for a day. Don't teach a man to fish, and you feed yourself. He's a grown man. Fishing's not that hard.", user_id: 1)
crawl.save
bars.each_with_index do |bar,index|
  crawl.hops.create(bar: bar, position: index + 1)
end
tags.each do |tag|
  crawl.tags << tag
end

crawl1 = Crawl.new(name: "New Toronto Crawl", description: "I once worked with a man for three years and never got to know his name. Best friend I ever had.", user_id: 1)
crawl1.save
bars1.each_with_index do |bar,index|
  crawl1.hops.create(bar: bar, position: index + 1)
end
tags1.each do |tag|
  crawl1.tags << tag
end

crawl2 = Crawl.new(name: "OK Crawl", description: "The whole thing is a scam. Birthday's were invented by Hallmark to sell cards.", user_id: 1)
crawl2.save
bars2.each_with_index do |bar, index|
  crawl2.hops.create(bar: bar, position: index + 1)
end
tags2.each do |tag|
  crawl2.tags << tag
end

crawl3 = Crawl.new(name: "Toronto Is Bananas", description: "SO LET HIM HAVE BANANAS ON THE SIDE!", user_id: 2)
crawl3.save
bars3.each_with_index do |bar, index|
  crawl3.hops.create(bar: bar, position: index + 1)
end
tags3.each do |tag|
  crawl3.tags << tag
end

crawl4 = Crawl.new(name: "Festivus", description: "At the Festivus dinner, you gather your family around, and tell them all the ways they have disappointed you over the past year.", user_id: 3)
crawl4.save
bars4.each_with_index do |bar, index|
  crawl4.hops.create(bar: bar, position: index + 1)
end
tags4.each do |tag|
  crawl4.tags << tag
end

crawl5 = Crawl.new(name: "For The Rest Of Us!", description: "Welcome, newcomers. The tradition of Festivus begins with the airing of grievances. I got a lot of problems with you people! And now you're gonna hear about it! ", user_id: 3)
crawl5.save
bars5.each_with_index do |bar, index|
  crawl5.hops.create(bar: bar, position: index + 1)
end
tags5.each do |tag|
  crawl5.tags << tag
end

crawl6 = Crawl.new(name: "The Caped Lawyer", description: "I'm Frank Costanza's lawyer", user_id: 4)
crawl6.save
bars6.each_with_index do |bar, index|
  crawl6.hops.create(bar: bar, position: index + 1)
end
tags6.each do |tag|
  crawl6.tags << tag
end

crawl7 = Crawl.new(name: "The Caddy", description: "You can't let the defendant have control of the key piece of evidence. Plus, she's trying it on over a leotard, of course a bra's not gonna fit over a leotard. A bra gotta fit right over a person's skin. Like a glove! ", user_id: 5)
crawl7.save
bars7.each_with_index do |bar, index|
  crawl7.hops.create(bar: bar, position: index + 1)
end
tags7.each do |tag|
  crawl7.tags << tag
end

crawl8 = Crawl.new(name: "Jackie's Crawl", description: "Do we have a chance? You get me one coffee drinker on that jury, you gonna walk outta there a rich man.", user_id: 5)
crawl8.save
bars8.each_with_index do |bar, index|
  crawl8.hops.create(bar: bar, position: index + 1)
end
tags8.each do |tag|
  crawl8.tags << tag
end

crawl9 = Crawl.new(name: "Independent George", description: "Well you know, all you guys ever do is sit around the coffee shop talking, sit around Jerry's apartment talking. Frankly, I don't know how you can stand it. I’ll see you", user_id: 6)
crawl9.save
bars9.each_with_index do |bar, index|
  crawl9.hops.create(bar: bar, position: index + 1)
end
tags9.each do |tag|
  crawl9.tags << tag
end

crawl10 = Crawl.new(name: "Yadda Yadda", description: "I'm Jewish, you're not a dentist. You have no idea what my people have been through.", user_id: 7)
crawl10.save
bars10.each_with_index do |bar, index|
  crawl10.hops.create(bar: bar, position: index + 1)
end
tags10.each do |tag|
  crawl10.tags << tag
end

crawl11 = Crawl.new(name: "JERRY!", description: "Jerry, you wanna hear something? Your cousin, Jeffrey, is switching parks. They’re transferring him to Riverside — so he’ll completely revamp that operation, you understand? He’ll do in Riverside what he did in Central Park. It’s more money. So, that’s your cousin.", user_id: 8)
crawl11.save
bars11.each_with_index do |bar, index|
  crawl11.hops.create(bar: bar, position: index + 1)
end
tags11.each do |tag|
  crawl11.tags << tag
end

crawl12 = Crawl.new(name: "HELLO!", description: "Listen, I don’t want to alarm you, but your nana is missing… I came to pick her up for a doctor’s appointment, she wasn’t here. I called the doctor, nobody knows where she is. She hasn’t left the apartment in twenty-five years!", user_id: 8)
crawl12.save
bars12.each_with_index do |bar, index|
  crawl12.hops.create(bar: bar, position: index + 1)
end
tags12.each do |tag|
  crawl12.tags << tag
end

crawl13 = Crawl.new(name: "Cousin Jeffrey!", description: "You need some new material. I’ve heard you do that dog routine three times already… Listen, you should get your cousin Jeffrey to write some material for you… You should read the letters he’s written. He’s funnier than the whole bunch of you!", user_id: 8)
crawl13.save
bars13.each_with_index do |bar, index|
  crawl13.hops.create(bar: bar, position: index + 1)
end
tags13.each do |tag|
  crawl13.tags << tag
end

crawl14 = Crawl.new(name: "The Estelle", description: "My mother has never laughed. Ever. Not a giggle, not a chuckle, not a tee-hee.. never went 'Ha!'", user_id: 2)
crawl14.save
bars14.each_with_index do |bar, index|
  crawl14.hops.create(bar: bar, position: index + 1)
end
tags14.each do |tag|
  crawl14.tags << tag
end