# Gradebook

A course reader built with Postgres, Ruby on Rails, and React.js, it allows authentication and authorization of three different types of users: administrators, teachers, and students. Administrators can see the overall grade of any course, its enrollment count, visit the profile of that course, and visit a student's profile. Teachers can see the courses they are teaching, that courses profile, as well as update their students' grades, as well as visit their students' profiles. A student can only see the courses they are enrolled in, and their overall gpa.

## Decisions
I decided to implement my own authentication using Rails' Bcrypt gem, and further decided against allowing users to sign up to use the application, instead opting to have all possible users already seeded in the app's backend. This is something I may change in the future, as the primary goal of this project was to familiarize myself with different types of authorization, and navigability.

## Get Gradebook Up and Running
To get Gradebook up and running on your local machine clone this repository, and navigate to `/Gradebook` from your terminal. This application requires Postgres, and should be running when you run `bundle && rails db:create && rake db:migrate && rake db:seed && rails server`. In another terminal window run `npm install` and then `webpack --watch`. After that, navigate to localhost:3000 in your browser and enjoy exploring Gradebook!

## Coming Features
In addition to what the application currently offers, I will be implementing course items that a teacher can add, delete and update for their students, as well as a testing suit.
