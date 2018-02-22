class Api::StudentsController < ApplicationController

  def index
    @student_grades = StudentGrade.where(course_id: params[:courseId])
    @students = Student.get_students_in_course(params[:courseId]).includes(:user)
  end

  def update
    debugger
    # StudentGrade.update(grade: params[grade])
    StudentGrade.where(course_id: params[:courseId]).where(studentId: params[:studentId]).update(grade: params[grade])
    @grade = StudentGrade.where(course_id: params[:courseId]).where(studentId: params[:studentId])
    @student = Student.where(student_id: params[:studentId])
    render :show
  end

end
