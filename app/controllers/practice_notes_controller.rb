class PracticeNotesController < ApplicationController
  def index
    render json: PracticeNote.all
  end

  def create
    practice_note = PracticeNote.create(practice_note_params)
    render json: practice_note, status: :created
  end

  private

  def practice_note_params
    params.permit(:date, :title, :content, :song_id)
  end
end

