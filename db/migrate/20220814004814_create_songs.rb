class CreateSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :lyrics
      t.string :original_artist
      t.string :genre

      t.timestamps
    end
  end
end
