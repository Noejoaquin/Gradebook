json.extract! user, :email, :first_name, :last_name, :id

json.title Teacher.where(user_id: user.id).first.deparment
