class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :content, :restaurant_id, :user_id, :user, :restaurant

  belongs_to :user
  belongs_to :restaurant

end
