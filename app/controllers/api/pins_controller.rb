class Api::PinsController < ApplicationController
  def index
    if params[:board_id]
      @pins = Pin.where(board_id: params[:board_id])
    elsif params[:user_id]
      @pins = Pin.where(user_id: current_user.id)
    else
      @pins = Pin.all
    end
  end

  def show
    @pin = Pin.find(params[:id])
  end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      render :show
    else
      render json: @pin.errors, status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render :show
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors, status: 422
    end
  end

  def pin_params
    params.require(:pin).permit(:title, :description, :url, :image_url, :user_id, :board_id)
  end
end
