# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160229173841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string   "name"
    t.string   "address"
    t.string   "city"
    t.string   "province"
    t.string   "website"
    t.string   "phone_number"
    t.integer  "price"
    t.datetime "created_at",                            null: false
    t.datetime "updated_at",                            null: false
    t.decimal  "lat",          precision: 9,  scale: 7
    t.decimal  "lng",          precision: 10, scale: 7
  end

  create_table "crawls", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "crawls", ["user_id"], name: "index_crawls_on_user_id", using: :btree

  create_table "crawls_tags", force: :cascade do |t|
    t.integer "crawl_id"
    t.integer "tag_id"
  end

  create_table "drinks", force: :cascade do |t|
    t.integer  "bar_id"
    t.integer  "user_id"
    t.string   "name"
    t.string   "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "hops", force: :cascade do |t|
    t.integer  "bar_id"
    t.integer  "crawl_id"
    t.integer  "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "hops", ["bar_id"], name: "index_hops_on_bar_id", using: :btree
  add_index "hops", ["crawl_id"], name: "index_hops_on_crawl_id", using: :btree

  create_table "invitees", force: :cascade do |t|
    t.integer  "crawl_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "invitees", ["crawl_id"], name: "index_invitees_on_crawl_id", using: :btree
  add_index "invitees", ["user_id"], name: "index_invitees_on_user_id", using: :btree

  create_table "reviews", force: :cascade do |t|
    t.integer  "crawl_id"
    t.integer  "user_id"
    t.integer  "rating"
    t.text     "comment"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "reviews", ["crawl_id"], name: "index_reviews_on_crawl_id", using: :btree
  add_index "reviews", ["user_id"], name: "index_reviews_on_user_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "firstname"
    t.string   "lastname"
    t.string   "image"
    t.string   "provider"
    t.string   "uid"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree

  add_foreign_key "crawls", "users"
  add_foreign_key "hops", "bars"
  add_foreign_key "hops", "crawls"
  add_foreign_key "invitees", "crawls"
  add_foreign_key "invitees", "users"
  add_foreign_key "reviews", "crawls"
  add_foreign_key "reviews", "users"
end
