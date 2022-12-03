class ReviewsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        review = Review.all 
        render json: review
    end

    def show
        review = find_review
        render json: review
    end


    private 

    def find_review
        review = Review.find(params[:id])
    end

    def render_not_found_response
        render json: {error: "review not found"}, status: :not_found
    end
end
