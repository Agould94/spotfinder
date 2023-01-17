class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    before_action :logged_in?, only: [:create, :destroy]

    def index
        review = Review.all 
        render json: review
    end

    def show
        review = find_review
        render json: review
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        if review
            review.destroy
            head :no_content
        else
            render json: {error: "review not found"}, status: :not_found
        end
    end


    private

    def review_params
        params[:review]=params[:review].merge(user_id: session[:user_id])
        params.require(:review).permit(:stars, :content, :restaurant_id, :user_id)
    end

    def find_review
        review = Review.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "review not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
