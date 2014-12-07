class Video < ActiveRecord::Base
  has_many :bookmarks
  has_many :comments
  has_many :notes
  
  validates :url, uniqueness: true, format: URI::regexp(%w(http https))
  validates :title, length: { minimum:1, maximum: 100 }, unless: Proc.new { |a| a.title.nil? }

end
