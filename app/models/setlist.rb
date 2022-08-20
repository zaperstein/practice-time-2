class Setlist < ApplicationRecord
  belongs_to :user
  has_many :setlist_songs, dependent: :destroy
  has_many :songs, through: :setlist_songs

  validates :song, uniqueness: {scope: :title}


end
