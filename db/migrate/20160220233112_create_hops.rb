class CreateHops < ActiveRecord::Migration
  def change
    create_table :hops do |t|
      t.references :bar, index: true, foreign_key: true
      t.references :crawl, index: true, foreign_key: true
      t.integer :position

      t.timestamps null: false
    end
  end
end
