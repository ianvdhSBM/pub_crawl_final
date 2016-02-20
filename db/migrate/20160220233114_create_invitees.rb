class CreateInvitees < ActiveRecord::Migration
  def change
    create_table :invitees do |t|
      t.references :crawl, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
