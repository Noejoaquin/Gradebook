@students.each do |student|
  json.set! student.user_id do
    User.where(id: student.user_id).first.first_name
    User.where(id: student.user_id).first.last_name
    json.extract! student, :id, :gpa
  end
end
