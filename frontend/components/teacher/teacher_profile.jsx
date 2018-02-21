import React from "react";
import { TeacherCourseIndexItem } from "./teacher_course_index_item";
class TeacherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.courses = this.props.courses;
  }

  componentDidMount() {
    if (this.props.courses.length === 0) {
      this.props.fetchCourses();
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
    if (this.props.courses.length !== 0) {
      courses = this.createCourseList(this.props.courses);
    }
    return (
      <div className='profile-container'>
        <div className='teacher-greeting-contaner'>
          <h1 className='greeting-message-1'>Welcome {this.props.currentUser.first_name} {this.props.currentUser.last_name}</h1>
          <h2 className='greeting-message-2'>Your Class List is Below</h2>
        </div>
        <ul className='course-index'>{courses}</ul>
      </div>
    );
  }
}

export default TeacherProfile;
