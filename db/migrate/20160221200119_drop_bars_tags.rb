class DropBarsTags < ActiveRecord::Migration
  def change
    drop_table :bars_tags
  end
end
