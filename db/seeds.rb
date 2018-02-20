# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
#teachers
user1 = User.create!(email: 'noe', first_name: 'noe', last_name: 'Jimenez', password:'starwars', role: 'teacher')

#students
user2 = User.create!(email: 'Joe', first_name: 'Joe', last_name: 'Jimenez', password:'starwars', role: 'student')
user4 = User.create!(email: 'Liz', first_name: 'Liz', last_name: 'Jimenez', password:'starwars', role: 'student')
user5 = User.create!(email: 'Jackie', first_name: 'Jackie', last_name: 'Jimenez', password:'starwars', role: 'student')
user6 = User.create!(email: 'Micael', first_name: 'Micael', last_name: 'Jimenez', password:'starwars', role: 'student')



user3 =  User.create!(email: 'jack', first_name: 'jack', last_name: 'Jimenez', password:'starwars', role: 'admin')


Teacher.destroy_all

teacher1 = Teacher.create!(user_id: user1.id, department: 'Mathematics' )


Student.destroy_all

student1 = Student.create!(user_id: user2.id)
student2 = Student.create!(user_id: user4.id)
student3 = Student.create!(user_id: user5.id)
student4 = Student.create!(user_id: user6.id)


Admin.destroy_all

Admin.create!(title: 'Dean of Admissions', user_id: user3.id)

Course.destroy_all
course1 = Course.create!(name: 'English Literature 101', teacher_id: teacher1.id)
