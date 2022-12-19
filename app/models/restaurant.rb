class Restaurant < ApplicationRecord
    has_many :reviews
    has_many :images
    has_many :users, through: :reviews

    validates :address, presence: true 
    validates :phone_number, presence: true
    validates :vibe, presence: true
end
