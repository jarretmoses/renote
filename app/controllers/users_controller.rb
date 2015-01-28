class UsersController < ApplicationController
  def index
    @user = User.find(current_user)
    respond_to do |f|
      f.json
    end
  end
end
