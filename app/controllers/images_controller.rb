class ImagesController < ApplicationController


    private 

    def image_params
        params.permit(:image, restaurant_id)
    end
end
