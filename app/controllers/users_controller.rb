class UsersController < ApplicationController
  def index
    @users = User.all
    respond_to do |f|
      f.json
    end
  end
end
