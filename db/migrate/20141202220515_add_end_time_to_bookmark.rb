class AddEndTimeToBookmark < ActiveRecord::Migration
  def change
    add_column :bookmarks, :end_time, :integer
  end
end
