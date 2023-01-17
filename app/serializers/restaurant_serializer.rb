class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :address, :phone_number, :vibe, :name, :image_url, :food_type, :popular_tags

  has_many :reviews
  has_many :images
  has_many :users
  has_many :tags

  def popular_tags
    Tag.popular_tags
  end
end
