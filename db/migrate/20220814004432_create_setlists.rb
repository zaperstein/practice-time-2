class CreateSetlists < ActiveRecord::Migration[7.0]
  def change
    create_table :setlists do |t|
      t.integer :amt_of_songs
      t.string :name
      t.integer :user_id

      t.timestamps
    end
  end
end
