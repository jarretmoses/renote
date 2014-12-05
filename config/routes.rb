Rails.application.routes.draw do

  resources :sessions, only: [:create, :destroy]

  resources :videos, only: [:show, :create, :index] do
    resources :bookmarks, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :update]
    resources :notes, only: [:create, :destroy, :update]
  end

  root 'videos#index'

  get '/auth/github', as: :login
  get '/auth/github/callback', to: 'sessions#create'
  get '/logout', to: 'sessions#destroy', as: :logout
  post '/videos/:video_id/notes/:id', to: 'notes#destroy', as: :delete_note
  post '/videos/:video_id/bookmarks/:id', to: 'bookmarks#destroy', as: :delete_bookmark


end