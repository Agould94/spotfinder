class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        users = User.all 
        render json: users
    end

    def show
        user = find_user
        render json: user
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            render json: user, status: :created
        else
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        user = find_user
        user.update!(user_params)
        render json: user
    end


    private 

    def find_user
        user = User.find(session[:user_id])
    end

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation, :zip, :vibe, :user)
    end

    def render_not_found_response
        render json: {error: "User not found"}, status: :not_found
    end

    def render_unprocessable_entity_response
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end
end
