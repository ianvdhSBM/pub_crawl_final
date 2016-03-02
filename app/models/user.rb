class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable,
    :omniauthable, :omniauth_providers => [:facebook]

  mount_uploader :image, AvatarUploader

  has_many :crawls
  has_many :drinks
  has_many :reviews
  has_many :invites, class_name: "Invitee", foreign_key: "user_id", source: :invitee
  has_many :crawls, through: :invites

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

  def self.from_omniauth(auth)

    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      url = auth.info.image
      httpc = HTTPClient.new
      resp = httpc.get(url)
      # binding.pry
      user.remote_image_url = resp.header['Location'].first
      user.email = auth.info.email
      user.password = Devise.friendly_token[0,20]
      user.firstname = auth.info.name   # assuming the user model has a name
      # user.image = auth.info.image # assuming the user model has an image
      # user.remote_image_url = auth.info.image
      # user.remote_image_url = auth.info.image
    end
  end

end
