class Video < ActiveRecord::Base
  has_many :bookmarks
  has_many :comments
  
  validates :url, uniqueness: true, format: URI::regexp(%w(http https))
end
