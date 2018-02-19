json.extract! current_user, :email, :first_name, :last_name, :id, :role

json.department Teacher.where(user_id: current_user.id).first.department
