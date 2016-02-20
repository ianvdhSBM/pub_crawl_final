class Invitee < ActiveRecord::Base
  belongs_to :crawl
  belongs_to :user
end
