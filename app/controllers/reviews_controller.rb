class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
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


    private

    def review_params
        params.permit(:start, :content, :restaurant_id, :user_id)
    end

    def find_review
        review = Review.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "review not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
