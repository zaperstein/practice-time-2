class UsersController < ApplicationController
  skip_before_action :authorized_user, only: [:create]

    def index 
      users = User.all
      # byebug
      render json: users
    end
    def show
      render json: current_user, status: :ok
    end
  
    def create
      user = User.create!(user_params)
      render json: user, status: :created
    end


    def user_setlists
      user = User.find(params[:id])
      render json: user.setlists.as_json
    end

    

    def user_instruments 
    user = User.find(params[:id])
    render json: user.instruments.as_json
    end

    private

    def user_params
      params.permit(:username, :password, :bio)
    end
  end
