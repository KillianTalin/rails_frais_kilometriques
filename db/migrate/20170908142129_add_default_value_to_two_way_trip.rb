class AddDefaultValueToTwoWayTrip < ActiveRecord::Migration[5.0]
  def change
    change_column_default :rides, :two_way_trip, from: nil, to: false
  end
end
