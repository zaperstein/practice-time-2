class InstrumentsController < ApplicationController
  def index
    render json: Instrument.all
  end

  def show
    instrument = Instrument.find_by(id)
    if instrument 
      render json: instrument
    else
      render json: {error: "No user"}
    end
  end

  def destroy
    instrument = Instrument.find(params[:id])
    instrument.destroy 
    head :no_content, status: :ok
  end

  def create
  instrument = Instrument.create(instrument_params)
  render json: instrument, status: :created
  end

  private

  def instrument_params
    params.permit(:name, :amt_of_strings)
  end
end
