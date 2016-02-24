class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :image, AvatarUploader

  has_many :crawls
  has_many :drinks
  has_many :reviews

  # validates :name,
  #   presence: true,
  #   length: { in: 4..40 }

  # validates :nickname,
  #   presence: true,
  #   uniqueness: true,
  #   length: { in: 3..20 }

  # validates :email,
  #   presence: true,
  #   uniqueness: true,
  #   format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i }

end
