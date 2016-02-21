class CreateDrinks < ActiveRecord::Migration
  def change
    create_table :drinks do |t|
      t.references    :bar
      t.references    :user
      t.string        :name
      t.string        :category

      t.timestamps null: false
    end
  end
end
