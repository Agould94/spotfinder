class RestaurantTagSerializer < ActiveModel::Serializer
  attributes :id, :restaurant_id, :tag_id

  belongs_to :restaurant
  belongs_to :tag
end
