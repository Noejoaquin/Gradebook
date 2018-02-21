class Api::StudentsController < ApplicationController

  def index
    @students = Student.get_students_in_course(params[:data])
  end


  def user_params
    params.require(:student).permit(:course_id)
  end
end
