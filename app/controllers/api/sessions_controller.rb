class Api::SessionsController < ApplicationController

  def create
  @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
  if @user
    login(@user)
    if @user.role == 'teacher'
      render 'api/users/teachers/_show'
    elsif @user.role == 'student'
      render 'api/users/students/_show'
    else
      render 'api/users/admins/_show'
    end
  else
    # debugger
    render json: ['Invalid combination of username and password'], status: 401
  end
end

def destroy
  @user = current_user
  if @user
    logout
    render json: '{}', status: 200
  else
    render json: ['No one is logged in'], status: 404
  end
end

end
