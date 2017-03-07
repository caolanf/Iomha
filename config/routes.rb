Rails.application.routes.draw do
  
  resources :users, :posts
  
  root 'posts#top'
  
  get 'i/:sub' => 'posts#subindex'
  
  get 'messages' => 'users#messages'
  
  get 'post' => 'posts#new'
  get'i/:sub/top/' => 'posts#subindex'
  get'i/:sub/new/' => 'posts#subindexnew'
  get'i/:sub/top/:time/:page' => 'posts#subindex'
  get'i/:sub/new/:page' => 'posts#subindexnew'
  get'i/:sub/top/:time' => 'posts#subindex'
  get 'i/:sub/:id' => 'posts#show'
  get 'i/:sub/:id/upvote' => 'posts#upvote'
  get 'i/:sub/:id/downvote' => 'posts#downvote'
  get'i/:sub/:id/delete' => 'posts#delete'
  
  get 'cookies' => 'users#cookies'
  get 'rules' => 'users#rules'
  get 'contact' => 'users#contact'
  get 'help' => 'users#help'
  
  get 'top/:time/' => 'posts#top'
  get 'top/:time/:page' => 'posts#top'
  get 'new' => 'posts#newest'
  get 'new/:page' => 'posts#newest'
  
  get 'comments/:id/upvote' => 'comments#upvote'
  get 'comments/:id/downvote' => 'comments#downvote'
  post 'i/:sub/:id' => 'comments#create'
  
  get 'themes' => 'users#themes'
  post 'settings' => 'users#updateset'
  
  get 'signup' => 'users#new'
  post 'signup' => 'users#create'
  
  get 'login' => 'sessions#new'
  post 'login' => 'sessions#create'
  get 'logout' => 'sessions#destroy'
  
  get 'user/:username' => 'users#show'
  
end
