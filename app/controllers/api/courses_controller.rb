class Api::CoursesController < ApplicationController

  def index
    debugger
    @courses = Course.all
  end

  def course_params
    params.require(:course).permit(:role, :id)
  end

end
