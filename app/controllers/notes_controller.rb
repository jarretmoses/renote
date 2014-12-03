class NotesController < ApplicationController
  def create
    @video = Video.find(params[:video_id])
    @note = @video.notes.build(note_params)
    @note.user = current_user
    @note.save
  end

  def destroy
    @video = Video.find(params[:video_id])
    @note = @video.notes.find(params[:id])
    @note.destroy
  end

  private
    def note_params
      params.require(:note).permit(:content)
    end
end
