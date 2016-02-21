class CreateBarsTags < ActiveRecord::Migration
  def change
    create_table :bars_tags do |t|
      t.references :bar
      t.references :tag

      t.timestamps
    end
  end
end
