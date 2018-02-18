json.extract! current_user, :email, :first_name, :last_name, :id

json.department Teacher.where(user_id: current_user.id).first.department
