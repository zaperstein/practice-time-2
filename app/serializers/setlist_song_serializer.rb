class SetlistSongSerializer < ActiveModel::Serializer
  attributes :id, :setlist_id, :song_id

  belongs_to :setlist
  belongs_to :song
end
