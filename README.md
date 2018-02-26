# README

# Gradebook

A course reader built with Postgres, Ruby on Rails, and React.js, it allows authentication and authorization of three different types of users: administrators, teachers, and students. Administrators can see the overall grade of any course, its enrollment count, visit the profile of that course, and visit a student's profile. Teachers can see the courses they are teaching, that courses profile, as well as update their students' grades, as well as visit their students' profiles. A student can only see the courses they are enrolled in, and their overall gpa.

## Decisions
I decided to implement my own authentication using Rails' Bcrypt gem, and further decided against allowing users to sign up to use the application, instead opting to have all possible users already seeded in the app's backend. This is something I may change in the future, as the primary goal of this project was to familiarize myself with different types of authorization, and navigability.

## Get Gradebook Up and Running
To get Gradebook up and running on your local machine...
