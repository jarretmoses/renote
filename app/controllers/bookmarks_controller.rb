class BookmarksController < ApplicationController

  def create
    @video = Video.find(params[:video_id])
    @bookmark = @video.bookmarks.build(bookmark_params)
    @bookmark.save
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:start_time, :title)
  end

end
