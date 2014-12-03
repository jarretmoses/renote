class User < ActiveRecord::Base
  has_many :notes
  has_many :bookmarks
  has_many :comments
  def self.get_user_from_omniauth(auth_hash)
    find_by(uid: auth_hash.uid.to_i) || create(name: auth_hash.info.name, uid: auth_hash.uid.to_i, image: auth_hash.info.image)
  end
end
