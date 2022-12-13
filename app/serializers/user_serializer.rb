class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :vibe, :zip

  has_many :reviews
end
