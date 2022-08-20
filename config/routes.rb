Rails.application.routes.draw do
  resources :instrument_users
  resources :instrument_songs
  resources :setlist_songs
  resources :practice_notes
  resources :songs
  resources :instruments
  resources :users
  resources :setlists
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get '/hello', to: 'application#hello_world'

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#delete"

  get '/users/:id/setlists', to: 'users#user_setlists'

  get '/users/:id/instruments', to: 'users#user_instruments'

  get '/users/:id/setlists/:id', to: 'setlists#user_setlist'

end
