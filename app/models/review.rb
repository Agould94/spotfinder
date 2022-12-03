class Review < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user

    validates :stars, presence: true
    validates :stars, numericality: true 
    validates :stars, numericality: {in: 1..5}
end
