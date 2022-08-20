class CreateInstrumentUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :instrument_users do |t|
      t.integer :instrument_id
      t.integer :user_id

      t.timestamps
    end
  end
end
