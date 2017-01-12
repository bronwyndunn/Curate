class Api::BoardsController < ApplicationController
  def index
    @boards = Board.where(user_id: current_user.id)
  end

  def show
    @board = Board.find(params[:id])
  end

  def create
    @board = Board.new(board_params)
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
    if @board.update
      render :show
    else
      render json: @board.errors, status: 422
    end
  end

  def board_params
    params.require(:board).permit(:title, :description)
  end
end
