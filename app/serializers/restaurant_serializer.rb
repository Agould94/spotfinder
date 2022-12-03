class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :address, :phone_number, :vibe
end
