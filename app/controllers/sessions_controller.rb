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
    session[:evernote] = auth_hash.credentials.token
    session[:note_store] = auth_hash.extra.access_token.params["edam_noteStoreUrl"]

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