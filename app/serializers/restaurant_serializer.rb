class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :address, :phone_number, :vibe, :name, :image_url, :food_type

  has_many :reviews
end
