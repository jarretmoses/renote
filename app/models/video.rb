class Video < ActiveRecord::Base
  has_many :bookmarks
  has_many :comments
  has_many :notes
  
  validates :url, uniqueness: true, format: URI::regexp(%w(http https))
  validates :title, length: { maximum: 255 }

end
