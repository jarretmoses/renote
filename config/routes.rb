Rails.application.routes.draw do
  resources :videos, only: [:show, :create, :index] do
    resources :bookmarks, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
  end

  root 'videos#index'

  post '/videos/:video_id/comments', to: 'comments#create', as: :create_comment
end
