class Video < ActiveRecord::Base
  has_many :bookmarks

  validates :url, uniqueness: true, format: URI::regexp(%w(http https))
  validates :title, length: { minimum:1, maximum: 100 }, unless: Proc.new { |a| a.title.nil? }

  def friendly_title
    self.title || "Untitled"
  end

  def notes_for_user(user)
    self.bookmarks.where("user_id = ?", user.id).order(:created_at)
  end

end
