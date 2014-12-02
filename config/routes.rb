Rails.application.routes.draw do
  resources :sessions, only: [:create, :destroy]

  resources :videos, only: [:show, :create, :index] do
    resources :bookmarks, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end

  root 'videos#index'

  get '/auth/github/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: :logout

end