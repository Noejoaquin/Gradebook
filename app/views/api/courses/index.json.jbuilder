@courses.each do |course|
  json.set! course.id do
    json.extract! course, :id, :name, :overall_grade
    json.number_of_students course.students.count
    json.teacher course.teacher.user.first_name + ' ' + course.teacher.user.last_name
  end
end
