class SetlistsController < ApplicationController
  def index 
    render json: @current_user.setlists
  end
  def create
    render json: Setlist.create(setlist_params), status: :created
  end
  def show 
    setlist = Setlist.find(params[:id])
    render json: setlist
  end

  def user_setlist
    user = User.find(params[:id])
    setlist = user.setlists
    render json: user.setlist.as_json
  end

  private

  def setlist_params 
    params.permit(:amt_of_songs, :name, :user_id)
  end
end
