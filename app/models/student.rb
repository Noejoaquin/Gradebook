class Student < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :user_id

  has_many :attendances,
  primary_key: :id,
  class_name: 'Attendance',
  foreign_key: :student_id

  has_many :courses,
  through: :attendances,
  source: :course

  has_many :grades,
  primary_key: :id,
  class_name: 'StudentGrade',
  foreign_key: :student_id

  def self.get_students_in_course(id)
    course = Course.where(id: id.to_i).first
    course.students
  end

end
