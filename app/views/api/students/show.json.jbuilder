@students.each do |student|
  json.set! student.user_id do
    json.first_name student.user.first_name
    json.last_name student.user.last_name
    json.gpa student.gpa
    json.id student.user_id
    json.courses @courses.each do |course|

                    json.extract! course, :id, :name, :overall_grade

    end
    json.grades @grades.each do |grade|

        json.extract! grade, :id, :course_id, :grade

    end
  end
end
