class BookmarksController < ApplicationController

  def create
    @bookmark = Bookmark.create(bookmark_params)
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:start_time, :title)
  end

end
