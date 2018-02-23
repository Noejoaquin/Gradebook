class Api::StudentsController < ApplicationController

  def index
    @student_grades = StudentGrade.where(course_id: params[:courseId])
    @students = Student.get_students_in_course(params[:courseId]).includes(:user)
  end

  def update
    # debugger
    if params[:data][:grade] == ''
      student_id = params[:data][:student_id]
      render json: ['Please input a number'], status: 400
      return
    end
    @grade, @students = Student.update_grade(params[:data][:courseId],
                                            params[:data][:studentId],
                                            params[:data][:grade]
                                          )
    render :show
  end

end
