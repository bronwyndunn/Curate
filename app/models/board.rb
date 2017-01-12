class Board < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :user
  has_many :pins
end
