class SongsController < ApplicationController
  skip_before_action :authorized_user, only: [:show, :create]
  def index 
    render json: Song.all
  end

  def show
    render json: Song.find(params[:id])
  end
end
