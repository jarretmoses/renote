class BookmarksController < ApplicationController

  before_action :find_video
  def create
    @bookmark = @video.bookmarks.build(bookmark_params)
    @bookmark.user = current_user
    @bookmark.save
  end

  def destroy
    @bookmark = @video.bookmarks.find(params[:id])
    @bookmark.destroy
  end

  def update
   @bookmark = @video.bookmarks.find(params[:id])
   @bookmark.update(bookmark_params)
  end

  private
  def bookmark_params
    params.require(:bookmark).permit(:start_time, :title)
  end

  def find_video
     @video = Video.find(params[:video_id])
  end

end
