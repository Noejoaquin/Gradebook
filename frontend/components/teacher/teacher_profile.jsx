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
      <div>
        TeacherProfile
        <ul>{courses}</ul>
      </div>
    );
  }
}

export default TeacherProfile;
