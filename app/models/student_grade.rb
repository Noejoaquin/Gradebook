class StudentGrade < ApplicationRecord

  belongs_to :student,
  primary_key: :id,
  class_name: 'Student',
  foreign_key: :user_id

  belongs_to :course,
  primary_key: :id,
  class_name: 'Course',
  foreign_key: :course_id

end
