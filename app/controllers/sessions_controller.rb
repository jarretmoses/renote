class SessionsController < ApplicationController
  def create
    @user = User.get_user_from_omniauth(auth_hash)
    log_in(@user)
    redirect_to :back
 end

 def destroy
   log_out
   flash[:notice] = "You have been logged out."
   redirect_to root_path
 end

 private
 def auth_hash
   request.env['omniauth.auth']
 end
end