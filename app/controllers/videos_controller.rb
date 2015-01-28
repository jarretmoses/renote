class VideosController < ApplicationController

  INDEX_VIDEO_SLICES_PER_ROW = 3

  def show
    @user = current_user
    @video = Video.find(params[:id])
    @bookmarks = @video.bookmarks.order(start_time: :asc)
    @comments = @video.comments
    @session = session[:evernote]
    @notes = @video.notes_for_user(current_user) if current_user

    respond_to do |f|
      f.json
      f.html
    end
  end

  def index
    if logged_in?
      user_videos = current_user.videos.uniq
      if user_videos && user_videos.size > 0
        @user_videos_set = user_videos.each_slice(INDEX_VIDEO_SLICES_PER_ROW)
        @total_videos = user_videos.size
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

  def about
  end


  private
  def video_params
    params.require(:video).permit(:title, :url)
  end

end
