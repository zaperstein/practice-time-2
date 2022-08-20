class CreatePracticeNotes < ActiveRecord::Migration[7.0]
  def change
    create_table :practice_notes do |t|
      t.date :date
      t.string :title
      t.string :content
      t.integer :song_id

      t.timestamps
    end
  end
end
