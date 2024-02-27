class HomeController < ApplicationController
  def index
    @products = Product.all
    gon.products = @products
  end
end
