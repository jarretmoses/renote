class AddTitleToVideo < ActiveRecord::Migration
  def change
    add_column :videos, :title, :string, default: nil
  end
end
