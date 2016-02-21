class ChangeLatAndLngToLoatsInBars < ActiveRecord::Migration
  def change
    remove_column :bars, :lat
    remove_column :bars, :lng
    add_column :bars, :lat, :decimal, precision:9 , scale: 7
    add_column :bars, :lng, :decimal, precision:10, scale: 7
  end
end
