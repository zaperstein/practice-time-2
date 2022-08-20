class Song < ApplicationRecord
  has_many :setlist_songs
  has_many :setlists, through: :setlist_songs
  has_many :instrument_songs
  has_many :instruments, through: :instrument_songs
  has_many :practice_notes
end
