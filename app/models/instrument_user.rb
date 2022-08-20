class InstrumentUser < ApplicationRecord
  belongs_to :instrument
  belongs_to :user
end
