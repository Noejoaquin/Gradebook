class Course < ApplicationRecord

  belongs_to :teacher,
  primary_key: :id,
  class_name: 'Teacher',
  foreign_key: :teacher_id

  belongs_to :student,
  primary_key: :id,
  class_name: 'Student',
  foreign_key: :student_id

end
