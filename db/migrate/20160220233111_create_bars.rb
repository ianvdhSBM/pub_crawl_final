class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :province
      t.string :lat
      t.string :lng
      t.string :website
      t.string :phone_number
      t.integer :price

      t.timestamps null: false
    end
  end
end
