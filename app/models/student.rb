class Student < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :user_id

end
