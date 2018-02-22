# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Student.destroy_all
StudentGrade.destroy_all
Teacher.destroy_all
Course.destroy_all
Admin.destroy_all
Attendance.destroy_all

#teachers
user1 = User.create!(email: 'noe', first_name: 'noe', last_name: 'Jimenez', password:'starwars', role: 'teacher')

#students
user2 = User.create!(email: 'Joe', first_name: 'Joe', last_name: 'Jimenez', password:'starwars', role: 'student')
user4 = User.create!(email: 'Liz', first_name: 'Liz', last_name: 'Jimenez', password:'starwars', role: 'student')
user5 = User.create!(email: 'Jackie', first_name: 'Jackie', last_name: 'Jimenez', password:'starwars', role: 'student')
user6 = User.create!(email: 'Micael', first_name: 'Micael', last_name: 'Jimenez', password:'starwars', role: 'student')


#admin
user3 =  User.create!(email: 'jack', first_name: 'jack', last_name: 'Jimenez', password:'starwars', role: 'admin')


#teachers
teacher1 = Teacher.create!(user_id: user1.id, department: 'Mathematics' )


#students
student1 = Student.create!(user_id: user2.id)
student2 = Student.create!(user_id: user4.id)
student3 = Student.create!(user_id: user5.id)
student4 = Student.create!(user_id: user6.id)


#admins

Admin.create!(title: 'Dean of Admissions', user_id: user3.id)

#courses
course1 = Course.create!(name: 'English Literature 101', teacher_id: teacher1.id)
course2 = Course.create!(name: 'Philosophy of Early 19th Century Russian Literature', teacher_id: teacher1.id)
course3 = Course.create!(name: 'Shakespeare\'s Ghost', teacher_id: teacher1.id)
course4 = Course.create!(name: 'American Poetry', teacher_id: teacher1.id)

#attendances
Attendance.create!(student_id: student1.id, course_id:course1.id)
Attendance.create!(student_id: student2.id, course_id:course1.id)
Attendance.create!(student_id: student3.id, course_id:course1.id)
Attendance.create!(student_id: student4.id, course_id:course1.id)

#student grades
StudentGrade.create!(student_id: student1.id, course_id:course1.id, grade: 3.7)
StudentGrade.create!(student_id: student2.id, course_id:course1.id, grade: 3.0)
StudentGrade.create!(student_id: student3.id, course_id:course1.id, grade: 3.25)
StudentGrade.create!(student_id: student4.id, course_id:course1.id, grade: 2.8)
