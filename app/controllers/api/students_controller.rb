class Api::StudentsController < ApplicationController

  def index
    debugger
  end


  def user_params
    params.require(:student).permit(:course_id)
  end
end
