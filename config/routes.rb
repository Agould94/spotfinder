Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"

  #resources :restaurant_tags
  #resources :user_tags
  #resources :tags
  #resources :images
  resources :reviews, only: [:index, :show, :create, :destroy]
  resources :restaurants, only: [:index, :show, :create, :update]
  resources :users

  post "/addrestauranttag", to: "restaurants#add_tag_to_restaurant"
  get "/filter", to: 'restaurants#filter'
  
  get "/popular_tags", to: "tags#popular_tags"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

 
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
