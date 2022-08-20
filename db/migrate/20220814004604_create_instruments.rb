class CreateInstruments < ActiveRecord::Migration[7.0]
  def change
    create_table :instruments do |t|
      t.string :name
      t.integer :amt_of_strings

      t.timestamps
    end
  end
end
