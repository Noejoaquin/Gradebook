# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(email: 'noe', first_name: 'noe', last_name: 'Jimenez', password:'starwars', role: 'teacher')
user2 = User.create!(email: 'joe', first_name: 'joe', last_name: 'Jimenez', password:'starwars', role: 'student')
user3 =  User.create!(email: 'jack', first_name: 'jack', last_name: 'Jimenez', password:'starwars', role: 'admin')


Teacher.destroy_all

Teacher.create!(user_id: user1.id, department: 'Mathematics' )


Student.destroy_all

Student.create!(user_id: user2.id)

Admin.destroy_all

Admin.create!(title: 'Dean of Admissions', user_id: user3.id)
