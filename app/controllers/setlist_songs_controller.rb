class SetlistSongsController < ApplicationController
  def index
    render json: SetlistSong.all
  end
end
