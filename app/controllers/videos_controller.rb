class VideosController < ApplicationController

  def show
    @video = Video.find(params[:id])
    @bookmarks = @video.bookmarks
  end

  def index
  end

end
