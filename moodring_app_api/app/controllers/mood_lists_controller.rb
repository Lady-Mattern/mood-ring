class MoodListsController < ApplicationController
  before_action :set_mood_list, only: [:show, :update, :destroy]

  # GET /mood_lists
  def index
    @mood_lists = MoodList.all

    render json: @mood_lists
  end

  # GET /mood_lists/1
  def show
    render json: @mood_list
  end

  # POST /mood_lists
  def create
    @mood_list = MoodList.new(mood_list_params)

    if @mood_list.save
      render json: @mood_list, status: :created, location: @mood_list
    else
      render json: @mood_list.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mood_lists/1
  def update
    if @mood_list.update(mood_list_params)
      render json: @mood_list
    else
      render json: @mood_list.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mood_lists/1
  def destroy
    @mood_list.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mood_list
      @mood_list = MoodList.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mood_list_params
      params.require(:mood_list).permit(:title, :mood, :img, :audio)
    end
end
