class BookmarksController < ApplicationController



  def create
    # var params = {
    #   bookmark: {
    #     start_time: video.currentTime
    #   }
    # }
    @bookmark = Bookmark.create(bookmark_params)
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:start_time)
  end

end
