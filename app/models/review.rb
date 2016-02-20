class Review < ActiveRecord::Base
  belongs_to :crawl
  belongs_to :user
end
