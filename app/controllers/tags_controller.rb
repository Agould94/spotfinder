class TagsController < ApplicationController


    def popular_tags
        popular_tags = Tag.popular_tags
        render json: popular_tags
    end
end
