class Teacher < ApplicationRecord

  validates :department, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :user_id

  has_many :courses,
  primary_key: :id,
  class_name: 'Course',
  foreign_key: :teacher_id
end
