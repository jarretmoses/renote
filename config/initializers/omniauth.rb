Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, ENV['GITHUB_KEY'], ENV['GITHUB_SECRET']
  provider :evernote, ENV['EVERNOTE_KEY'], ENV['EVERNOTE_SECRET']
end