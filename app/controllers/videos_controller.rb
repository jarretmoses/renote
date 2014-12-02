class VideosController < ApplicationController

  def show
    @video = Video.find(params[:id])
    @bookmarks = @video.bookmarks
    @comments = @video.comments
  end

  def index
  end

  def create
    @video = Video.find_or_create_by(url: params[:url])
    if @video.save
      redirect_to @video
    else
      redirect_to :back, notice: "Invalid URL"
    end
  end


end
