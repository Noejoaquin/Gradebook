class Course < ApplicationRecord

  belongs_to :teacher,
  primary_key: :id,
  class_name: 'Teacher',
  foreign_key: :teacher_id

end
