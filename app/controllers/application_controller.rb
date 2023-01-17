class ApplicationController < ActionController::API
    include ActionController::Cookies

    login_path = "/login"


    # def current_user
    #     @current_user ||= User.find(session[:user_id]) if session[:user_id]
    # end

    def logged_in?
        unless session[:user_id]
            render_not_logged_in_response
        end
    end
    
    private

        def render_not_logged_in_response
            render json: {errors: ["You need to be logged in to access this feature."]}, status: :unprocessable_entity
        end
    
end
