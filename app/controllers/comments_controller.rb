class CommentsController < ApplicationController

  def create
    @video = Video.find(params[:video_id])
    @comment = @video.comments.build(comment_params)
    @comment.save
  end

  private
  def comment_params
    params.require(:comment).permit(:start_time, :text)
  end

end
