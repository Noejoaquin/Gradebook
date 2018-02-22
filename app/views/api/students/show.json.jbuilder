  json.set! @student.user_id do
    json.grade @grade
    json.first_name @student.user.first_name
    json.last_name @student.user.last_name
    json.gpa @student.gpa
    json.id @student.id
  end
