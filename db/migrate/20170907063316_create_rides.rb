class CreateRides < ActiveRecord::Migration[5.0]
  def change
    create_table :rides do |t|
      t.date :date
      t.string :reason
      t.string :start_place
      t.string :end_place
      t.integer :ride_kilometer
      t.boolean :two_way_trip
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
