json.extract! @user, :email, :first_name, :last_name, :id

json.title Admin.where(user_id: @user.id).first.title