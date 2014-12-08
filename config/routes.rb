Rails.application.routes.draw do

  resources :sessions, only: [:create, :destroy]

  resources :videos, only: [:show, :create, :index,:update] do
    resources :bookmarks, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :update]
    resources :notes, only: [:create, :destroy, :update]
  end

  root 'videos#index'

  get '/auth/github', as: :login
  get '/auth/github/callback', to: 'sessions#create'
  get '/auth/evernote', as: :evernote_login
  get '/auth/evernote/callback', to: 'sessions#evernote'
  get '/logout', to: 'sessions#destroy', as: :logout
  post '/videos/:video_id/notes/:id', to: 'notes#destroy', as: :delete_note
  post '/videos/:video_id/bookmarks/:id', to: 'bookmarks#destroy', as: :delete_bookmark
  get '/about', to: "videos#about", as: :about
  get '/videos/:video_id/notes/:id', to: 'notes#evernote', as: :create_evernote


end