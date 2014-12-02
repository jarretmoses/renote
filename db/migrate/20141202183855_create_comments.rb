class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :text
      t.integer :start_time
      t.integer :video_id
      t.integer :user_id

      t.timestamps
    end
  end
end
