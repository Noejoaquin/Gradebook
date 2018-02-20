class Attendance < ApplicationRecord
  belongs_to :course,
  primary_key: :id,
  class_name: 'Course',
  foreign_key: :course_id

  belongs_to :student,
  primary_key: :id,
  class_name: 'Student',
  foreign_key: :student_id
end
