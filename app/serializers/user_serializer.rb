class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :vibe, :zip, :restaurants

  has_many :reviews
  has_many :restaurants
end
