json.extract! @course, :id, :name, :overall_grade
json.teacher @course.teacher.user.first_name + ' ' + @course.teacher.user.last_name
