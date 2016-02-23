class Crawl < ActiveRecord::Base

  belongs_to :user
  has_many :hops
  has_many :bars, through: :hops
  has_many :reviews
  has_many :invitees
  has_and_belongs_to_many :tags

  # validates :name,
  #   presence: true,
  #   uniqueness: true,
  #   length: { in: 5..40 }

  # validates :description,
  #   length: { maximum: 150 }

end
