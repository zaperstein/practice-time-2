class Instrument < ApplicationRecord
  has_many :instrument_users
  has_many :users, through: :instrument_users
  has_many :instrument_songs
  has_many :songs, through: :instrument_songs
end
