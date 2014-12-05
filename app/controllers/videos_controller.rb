class VideosController < ApplicationController

  def show
    @video = Video.find(params[:id])
    @bookmarks = @video.bookmarks
    @comments = @video.comments
    @notes = @video.notes.where("user_id = ?", "#{current_user.id}") if current_user
  end

  def index
    if current_user.videos
      @videos = current_user.videos.uniq!
    end
    render :index
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
