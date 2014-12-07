class SessionsController < ApplicationController

  def create
    @user = User.get_user_from_omniauth(auth_hash)
    log_in(@user)
    redirect_to http_referer
  end

  def destroy
    log_out
    redirect_to root_path
  end

  def evernote
    @evernote_uid = auth_hash.uid
    binding.pry
    redirect_to http_referer
  end

 private
 def auth_hash
    request.env['omniauth.auth']
 end

 def http_referer
    request.env['omniauth.origin']
 end
end