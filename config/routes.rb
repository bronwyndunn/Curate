Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create] do
      resources :boards, only: [:index]
    end
    resource :session, only: [:create, :destroy, :show]

    resources :boards
  end

  root to: 'static_pages#root'

end
