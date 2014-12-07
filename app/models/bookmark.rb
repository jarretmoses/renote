class Bookmark < ActiveRecord::Base
  belongs_to :video
  belongs_to :user

  validates :start_time, numericality: true
  validates :title, length: { maximum: 255 }, unless: Proc.new { |a| a.title.nil? }

end
