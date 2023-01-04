class Review < ApplicationRecord
    belongs_to :restaurant
    belongs_to :user

    validate :unique_review_content, on: :create

    validates :stars, presence: true
    validates :stars, numericality: true 
    validates :stars, numericality: {in: 1..5}

    private

    def unique_review_content
        if Review.exists?(user_id: user_id, restaurant_id: restaurant_id, content: content)
            errors.add(:content, "has already been reviewed by this user for this content")
        end
    end


end
