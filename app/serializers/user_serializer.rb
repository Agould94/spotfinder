class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :email, :vibe, :zip
end
