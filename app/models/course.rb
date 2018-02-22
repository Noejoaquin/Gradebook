class Course < ApplicationRecord

  belongs_to :teacher,
  primary_key: :id,
  class_name: 'Teacher',
  foreign_key: :teacher_id

  has_many :attendees,
  primary_key: :id,
  class_name: 'Attendance',
  foreign_key: :course_id

  has_many :students,
  through: :attendees,
  source: :student

  has_many :student_grades,
  primary_key: :id,
  class_name: 'StudentGrade',
  foreign_key: :course_id

  def self.find_courses(role, id)
    if role == 'teacher'
      teacher = Teacher.where(user_id: id).first
      courses = teacher.courses
    elsif role == 'student'
      student = Student.where(user_id: id).first
      courses = student.courses
    else
      courses = Course.all
    end
  end
end
