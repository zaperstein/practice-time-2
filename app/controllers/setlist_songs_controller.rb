class SetlistSongsController < ApplicationController
  def index
    render json: SetlistSong.all
  end

  def destroy
    setlist_song = SetlistSong.find(params[:id])
    setlist_song.destroy 
    head :no_content, status: :ok
    end
  end
end
