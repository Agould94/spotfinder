class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :restaurants, ->{distinct}, through: :reviews

    has_many :images

    has_many :user_tags
    has_many :tags, through: :user_tags

    #validates :name, presence: true
    validates :username, presence: true
    validates :username, uniqueness: true
    #validates :email, presence: true
    #validates :email, uniqueness: true
    #validates :zip, length: {is: 5}
end
