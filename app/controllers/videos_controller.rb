class VideosController < ApplicationController

  INDEX_VIDEO_SLICES_PER_ROW = 3

  def show
    @video = Video.find(params[:id])
    @bookmarks = @video.bookmarks
    @comments = @video.comments
    @notes = @video.notes.where("user_id = ?", "#{current_user.id}") if current_user
  end

  def index
    if logged_in?
      user_videos = current_user.videos.uniq
      if user_videos && user_videos.size > 0
        @user_videos_set = user_videos.each_slice(INDEX_VIDEO_SLICES_PER_ROW)
      end
    end
    render :index
  end

  def create
    @video = Video.find_or_create_by(url: params[:url])
    if @video
      redirect_to @video
    else
      redirect_to :back, notice: "Invalid URL"
    end
  end

  def update
    @video = Video.find(params[:id])
    @video.update(video_params)
    @video.save
  end


  private
  def video_params
    params.require(:video).permit(:title, :url)
  end

end
