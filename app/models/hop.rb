class Hop < ActiveRecord::Base
  belongs_to :bar
  belongs_to :crawl
end
