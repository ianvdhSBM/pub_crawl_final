bundle exec rails g model crawl name:string description:text user:references
bundle exec rails g model bar name:string address:string city:string province:string lat:string lng:string website:string phone_number:string price:integer
bundle exec rails g model hop bar:references crawl:references position:integer
bundle exec rails g model review crawl:references user:references rating:integer comment:text
bundle exec rails g model invitee crawl:references user:references
bundle exec rails g model tag name:string
