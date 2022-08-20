class User < ApplicationRecord
  has_secure_password
  has_many :instrument_users
  has_many :instruments, through: :instrument_users
  has_many :setlists
end
