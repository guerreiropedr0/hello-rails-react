Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    resources :greetings, only: %i[index]
  end
end
