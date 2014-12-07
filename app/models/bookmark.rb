class Bookmark < ActiveRecord::Base
  belongs_to :video
  belongs_to :user

  validates :start_time, numericality: true
  validates :title, length: {minimum: 1, maximum: 100 }

end
