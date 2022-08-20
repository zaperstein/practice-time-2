class InstrumentSong < ApplicationRecord
  belongs_to :instrument
  belongs_to :song
end
