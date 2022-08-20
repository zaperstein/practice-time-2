class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio

  has_many :setlists

  has_many :instruments
end
