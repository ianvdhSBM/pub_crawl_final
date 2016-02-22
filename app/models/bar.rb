class Bar < ActiveRecord::Base
  has_many :hops
  has_many :crawls, through: :hops
  has_many :drinks

  # validates :name,
  #   presence: true,
  #   uniqueness: true,
  #   length: { in: 3..40 }

  # validates :address, :city,
  #   presence: true

  # validates :province,
  #   presence: true,
  #   length: { is: 2 }

  # Do we need index?
  # def index
  #   @bars = Bar.all
  # end


end
