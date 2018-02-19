json.extract! current_user, :email, :first_name, :last_name, :id, :role

json.title Admin.where(user_id: current_user.id).first.title
