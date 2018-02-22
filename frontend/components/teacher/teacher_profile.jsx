import React from "react";
import { TeacherCourseIndexItem } from "./teacher_course_index_item";
class TeacherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.courses = this.props.courses;
  }

  componentDidMount() {
    if (this.props.courses.length === 0 && this.props.currentUser !== null) {
      this.props.fetchCourses({id:this.props.currentUser.id, role:this.props.currentUser.role});
    }
  }

  createCourseList(courses) {
    let list = courses.map(course => {
      return (
        <TeacherCourseIndexItem
          key={course.id}
          name={course.name}
          overallGrade={course.overall_grade}
          id={course.id}
        />
      );
    });
    return list;
  }

  render() {
    let courses;
    let greeting;
    if (this.props.courses.length !== 0) {
      courses = this.createCourseList(this.props.courses);
    }

    if (this.props.currentUser !== null) {
      greeting = <h1 className='greeting-message-1'>Welcome {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
    }
    return (
      <div className='profile-container'>
        <div className='teacher-greeting-contaner'>
          {greeting}
          <h2 className='greeting-message-2'>Your Course List is Below</h2>
        </div>
        <ul className='profile-index'>
          {courses}
        </ul>
      </div>
    );
  }
}

export default TeacherProfile;
