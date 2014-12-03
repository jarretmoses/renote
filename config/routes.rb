Rails.application.routes.draw do
  resources :notes

  resources :sessions, only: [:create, :destroy]

  resources :videos, only: [:show, :create, :index] do
    resources :bookmarks, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :notes, only: [:create, :destroy]
  end

  root 'videos#index'

  get '/auth/github', as: :login
  get '/auth/github/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: :logout
  post '/videos/:video_id/notes/:id', to: 'notes#destroy', as: :delete_note


end