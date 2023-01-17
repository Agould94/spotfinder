class TagSerializer < ActiveModel::Serializer
  attributes :id, :tag

  has_many :restaurants
  has_many :users


end
