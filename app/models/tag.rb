class Tag < ApplicationRecord
    has_many :users, through: :user_tags
    has_many :restaurant_tags
    has_many :restaurants, through: :restaurant_tags

    def self.popular_tags
        tags = Tag.all
        tallied_tags = tags.map{|tag| tag.tag}.tally

        sorted_tags = Tag.all.sort_by{|tag| tag.tally}.reverse

        popular_tags = sorted_tags.map{|tag| tag.tag}

        return popular_tags
    end
end
