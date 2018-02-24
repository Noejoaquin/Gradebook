import React from "react";
import { CourseIndexItem } from "./course_index_item";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.courses = this.props.courses;
  }

  componentDidMount() {
    if (this.props.currentUser !== null) {
      this.props.fetchCourses({id:this.props.currentUser.id, role:this.props.currentUser.role});
    }
  }

  createCourseList(courses) {
    debugger
    let list = courses.map(course => {
      return (
        <CourseIndexItem
          key={course.id}
          name={course.name}
          overallGrade={course.overall_grade}
          id={course.id}
          numberOfSudents={course.number_of_students}
        />
      );
    });
    return list;
  }

  render() {
    let courses;
    let greeting;
    let greeting2;
    if (this.props.courses.length !== 0) {
      courses = this.createCourseList(this.props.courses);
    }

    if (this.props.currentUser !== null) {
      greeting = <h1 className='greeting-message-1'>Welcome {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
      if (this.props.currentUser.role === 'teacher'){
        greeting2 = <h2 className='greeting-message-2'>Your Course List is Below</h2>
      } else {
        greeting2 = <h2 className='greeting-message-2'>All Courses are Listed Below</h2>
      }
    }
    debugger
    return (
      <div className='profile-container'>
        <div className='teacher-greeting-contaner'>
          {greeting}
          {greeting2}
        </div>
        <ul className='profile-index'>
          {courses}
        </ul>
      </div>
    );
  }
}

export default Profile;
