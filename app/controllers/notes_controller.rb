class NotesController < ApplicationController
  before_action :find_video
  def create
    @note = @video.notes.build(note_params)
    @note.user = current_user
    @note.save
  end

  def destroy
    @note = @video.notes.find(params[:id])
    @note.destroy
  end

  def update
   @note = @video.notes.find(params[:id])
   @note.update(note_params)
  end

  private
    def note_params
      params.require(:note).permit(:content)
    end

    def find_video
       @video = Video.find(params[:video_id])
    end
end
