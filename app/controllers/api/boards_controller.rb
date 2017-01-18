class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where(user_id: current_user.id).includes(:pins)
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
    @board.user = current_user
    if @board.save
      render :show
    else
      render json: @board.errors, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render :show
  end

  def update
    @board = Board.find(params[:id])
    if @board.update(board_params)
      render :show
    else
      render json: @board.errors, status: 422
    end
  end

  def board_params
    params.require(:board).permit(:title, :description, :user_id)
  end
end
