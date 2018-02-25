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

  def self.update_grade(course_id, student_id, grade)
    course_id = course_id.to_i
    student_id = student_id.to_i # userID
    id = Student.where(user_id: student_id).first.id
    student_grade = StudentGrade.where(course_id: course_id).where(student_id: id ).first
    # debugger
    student_grade.update(grade: grade)

    course = Course.find(course_id)
    Course.calculate_overall_grade(course)

    students = Student.where(id: id)
    courses = students.first.courses
    grades = students.first.grades
    [students, courses, grades]
  end

  def self.reset_gpa(id)
    student = Student.where(user_id: id).first
    grades = student.grades.map(&:grade)
    gpa = ( (grades.reduce(:+)) / grades.count ) / 25.0
    student.update(gpa: gpa.round(2))
  end

end
