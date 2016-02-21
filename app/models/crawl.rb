class Crawl < ActiveRecord::Base

  belongs_to :user
  has_and_belongs_to_many :bars
  has_many :reviews
  has_many :invitees

  # validates :name,
  #   presence: true,
  #   uniqueness: true,
  #   length: { in: 5..40 }

  # validates :description,
  #   length: { maximum: 150 }

end
