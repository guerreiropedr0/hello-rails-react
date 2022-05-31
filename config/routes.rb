Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :greetings, only: %i[index]
  end
  root 'static#index'

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
