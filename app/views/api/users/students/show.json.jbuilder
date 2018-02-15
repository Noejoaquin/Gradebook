json.extract! @user, :email, :first_name, :last_name, :id

json.gpa Student.where(user_id: @user.id).first.gpa
