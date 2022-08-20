class SetlistSerializer < ActiveModel::Serializer
  attributes :id, :amt_of_songs, :name, :user_id

  belongs_to :user
  has_many :setlist_songs
  has_many :songs, through: :setlist_songs
end
