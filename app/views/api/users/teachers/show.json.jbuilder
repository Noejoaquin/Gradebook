json.extract! @user, :email, :first_name, :last_name, :id

json.department Teacher.where(user_id: @user.id).first.department
