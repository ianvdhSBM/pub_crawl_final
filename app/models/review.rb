class Review < ActiveRecord::Base
  belongs_to :crawl
  belongs_to :user

  # validates :rating,
  #   presence: true,
  #   numericality: { greater_than: 0, less_than: 6 }

  # validates :comment,
  #   length: { maximum: 200 }

  # before_filter :load_movie, :restrict_access

end
