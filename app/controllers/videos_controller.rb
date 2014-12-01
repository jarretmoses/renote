class VideosController < ApplicationController

  def index
    @bookmarks = Bookmark.all
  end

end
