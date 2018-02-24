class Api::CoursesController < ApplicationController

  def index
    if params[:data][:role] == 'teacher'
      @courses = Course.find_courses(params[:data][:role], params[:data][:id])
    else
      # debugger
      @courses = Course.all
    end
    @courses.each do |course|
      Course.calculate_overall_grade(course)
    end
  end

  def show
    @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:role, :id)
  end

end
