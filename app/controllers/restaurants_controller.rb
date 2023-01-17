class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    before_action :logged_in?, only: [:create, :update]

    def index
        page = params[:page] || 1
        if params[:food_type] == "All" 
            restaurants = Restaurant.paginate(page: page, per_page: 10)
        else
            restaurants = Restaurant.where(food_type: params[:food_type]).paginate(page: page, per_page: 10)
        end
            render json: restaurants
    end

    def show
        restaurant = find_restaurant
        popular_tags = Tag.popular_tags
        render json: restaurant, popular_tags: popular_tags
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end

    def filter 
        page = params[:page]
        restaurants = Restaurant.where(food_type: params[:food_type]).paginate(page: page, per_page: 10)
        render json: restaurants
    end

    def update
        restaurant = find_restaurant
        puts params[:review_tags]
        review_tags = params[:review_tags]
        tags = review_tags.map do |tag|
            if Tag.find_by(tag:tag)
                Tag.find_by(tag: tag)
            else
                Tag.create(tag: tag, tally: 1)
            end
        end

        tags.each do |t|
            restaurant.tags.push(t)
            t.increment(:tally).save
        end

        render json: restaurant
    end



    private 

    def find_restaurant
        restaurant = Restaurant.find(params[:id])
    end

    def restaurant_params
        params.permit(:name, :address, :phone_number, :vibe, :food_type)
    end

    def render_not_found_response
        render json: {error: "Restaurant not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
