class Crawl < ActiveRecord::Base

  belongs_to :user
  has_many :hops
  has_many :bars, through: :hops
  has_many :reviews
  has_many :invitees
  has_many :users, through: :invitees
  has_and_belongs_to_many :tags

  attr_reader :average_rating

  # validates :name,
  #   presence: true,
  #   uniqueness: true,
  #   length: { in: 5..40 }

  # validates :description,
  #   length: { maximum: 150 }

  def average_rating
    rating = self.reviews.average(:rating)
    rating.round if rating
  end

  def average_rating
    rating = self.reviews.average(:rating)
    rating.round if rating
  end
end
