class UserTagSerializer < ActiveModel::Serializer
  attributes :id, :user

  belongs_to :tag
  belongs_to :user
end
