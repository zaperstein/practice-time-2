class SongSerializer < ActiveModel::Serializer
  attributes :id, :title, :lyrics, :original_artist

  has_many :setlist_songs
  # has_many :setlists, through: :setlist_songs
  has_many :practice_notes
end
