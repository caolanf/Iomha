Rails.application.routes.draw do
  
  resources :users, :posts
  
  root 'posts#index'
  
  get 'i/:sub' => 'posts#subindex'
  
  get 'post' => 'posts#new'
  get 'i/:sub/:id' => 'posts#show'
  get 'i/:sub/:id/upvote' => 'posts#upvote'
  get 'i/:sub/:id/downvote' => 'posts#downvote'
  
  get 'settings' => 'users#settings'
  post 'settings' => 'users#updateset'
  
  get 'signup' => 'users#new'
  post 'signup' => 'users#create'
  
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  get 'logout' => 'sessions#destroy'
  
end
