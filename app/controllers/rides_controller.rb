class RidesController < ApplicationController
  # before_action :authenticate_user!, only: [:edit, :update, :destroy]
    before_action :set_ride, only: [ :show, :edit, :update, :destroy]
  def index
    @rides = Ride.all
  end

  def show
  end

  def new
    @ride = Ride.new
  end

  def create
    @ride = Ride.new(ride_params)
    @ride.user = current_user
    if @ride.save
      redirect_to rides_path
    else
      render :new
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def set_ride
    @ride = Ride.find(params[:id])
  end

  def ride_params
    params.require(:ride).permit(:date, :reason, :start_place, :end_place, :ride_kilometer, :two_way_trip)
  end
end
