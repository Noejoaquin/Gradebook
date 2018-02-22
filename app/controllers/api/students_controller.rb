class Api::StudentsController < ApplicationController

  def index
    @student_grades = StudentGrade.where(course_id: params[:data])
    debugger
    @students = Student.get_students_in_course(params[:data]).includes(:user)
  end

end
