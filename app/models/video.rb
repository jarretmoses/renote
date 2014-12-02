class Video < ActiveRecord::Base
  has_many :bookmarks
  validates :url, uniqueness: true, format: URI::regexp(%w(http https))
end
