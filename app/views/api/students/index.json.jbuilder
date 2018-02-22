
@students.each do |student|
  student_grade = @student_grades.select{ |grade| grade.student_id == student.id}.first
  json.set! student.user_id do
    json.grade student_grade.grade
    json.first_name student.user.first_name
    json.last_name student.user.last_name
    json.gpa student.gpa
    json.id student.id
  end
end
