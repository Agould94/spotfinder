class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :stars, :content, :restaurant_id, :user_id

  
end
