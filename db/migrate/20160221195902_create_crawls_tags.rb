class CreateCrawlsTags < ActiveRecord::Migration
  def change
    create_table :crawls_tags do |t|
      t.references :crawl
      t.references :tag
    end
  end
end
