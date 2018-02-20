class Course < ApplicationRecord

  belongs_to :teacher,
  primary_key: :id,
  class_name: 'Teacher',
  foreign_key: :teacher_id

  has_many :attendees,
  primary_key: :id,
  class_name: 'Attendance',
  foreign_key: :student_id

  has_many :students,
  through: :attendees,
  source: :student
end
