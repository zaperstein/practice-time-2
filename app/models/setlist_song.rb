class SetlistSong < ApplicationRecord
  belongs_to :setlist
  belongs_to :song

  # validates :song, uniqueness: {scope: :setlist}

end
