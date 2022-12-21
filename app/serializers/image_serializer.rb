class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image, :restaurant_id

  belongs_to :restaurant
end
