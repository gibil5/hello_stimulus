Rails.application.routes.draw do
  #get 'pages/home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  #jx
  root "pages#home"

  #get 'slideshow'
  get 'slideshow', to: 'pages#slideshow'
end
