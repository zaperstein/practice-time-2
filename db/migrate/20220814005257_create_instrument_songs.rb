class CreateInstrumentSongs < ActiveRecord::Migration[7.0]
  def change
    create_table :instrument_songs do |t|
      t.integer :instrument_id
      t.integer :song_id

      t.timestamps
    end
  end
end
