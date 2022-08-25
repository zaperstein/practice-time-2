class SetlistSongsController < ApplicationController
  def index
    render json: SetlistSong.all
  end

  def show
    render json: SetlistSong.find(params[:id])
  end

  def destroy
    setlist_song = SetlistSong.find(params[:id])
    setlist_song.destroy 
    head :no_content, status: :ok
    end

  def create
    render json: SetlistSong.create(setlist_song_params), status: :created
  end

  private 

  def setlist_song_params
    params.permit(:song_id, :setlist_id, :setlist_song)
  end
end
