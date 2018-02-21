class Api::CoursesController < ApplicationController

  def index
    @courses = Course.find_courses(params[:data][:role], params[:data][:id])
  end

  def show
    @course = Course.find(params[:data][:id])
  end

  def course_params
    params.require(:course).permit(:role, :id)
  end

end
