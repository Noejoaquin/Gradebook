class Api::StudentsController < ApplicationController

  def index
    @student_grades = StudentGrade.where(course_id: params[:courseId])
    @students = Student.get_students_in_course(params[:courseId]).includes(:user)
  end

  def update
    course_id = params[:data][:courseId].to_i
    student_id = params[:data][:studentId].to_i
    grade = StudentGrade.where(course_id: course_id).where(student_id: student_id).first
    grade.update(grade: params[:data][:grade])
    @grade = StudentGrade.where(course_id: course_id).where(student_id: student_id).first.grade
    @student = Student.where(id: student_id).first
    render :show
  end

end
