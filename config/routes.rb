Rails.application.routes.draw do
  get 'ride/index'

  get 'ride/show'

  get 'ride/new'

  get 'ride/create'

  get 'ride/edit'

  get 'ride/update'

  get 'ride/destroy'

  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
