class RestaurantsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   
    def index
        page = params[:page] || 1
        if params[:food_type] == "All" 
            restaurants = Restaurant.paginate(page: page, per_page: 10)
        else
            restaurants = Restaurant.where(food_type: params[:food_type]).paginate(page: page, per_page: 10)
        end
        #paginated_restaurants = restaurants.paginate(page: page, per_page: 10)
        render json: restaurants
    end

    def show
        restaurant = find_restaurant
        render json: restaurant
    end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant
    end

    # def page
    #     page = params[:page] || 1
    #     restaurants = Restaurant.paginate(page: page, per_page: 10)
    #     render json: restaurants
    # end

    private 

    def find_restaurant
        restaurant = Restaurant.find(params[:id])
    end

    def restaurant_params
        params.permit(:name, :address, :phone_number, :vibe)
    end

    def render_not_found_response
        render json: {error: "Restaurant not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
