class InstrumentUsersController < ApplicationController
  
  def create
    render json: InstrumentUser.create(instrument_users_params), status: :created
  end

  private

  def instrument_users_params
    params.permit(:instrument_id, :user_id)
  end
end
