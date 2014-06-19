Rails.application.routes.draw do
  get 'main/index'

  resources :products, only: [:index, :show ]
  root to: 'main#index'

end
