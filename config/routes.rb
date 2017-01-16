Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create] do
      resources :boards, only: [:index]
      resources :pins, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]

    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy]

  end

  root to: 'static_pages#root'

end
