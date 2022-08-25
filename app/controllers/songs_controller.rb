class SongsController < ApplicationController
  skip_before_action :authorized_user, only: [:show, :create]
  def index 
    render json: Song.all
  end

  def show
    render json: Song.find(params[:id])
  end

  def create
    song = Song.create(song_params)
    render json: song, status: :created
  end

  private

  def song_params
    params.permit(:title, :lyrics, :original_artist, :genre)
  end
end
