import React from "react";
import { connect } from "react-redux";
import CourseProfile from "./teacher_profile";
// import { fetchCourse } from '../../actions/course_actions';
import { fetchStudents } from '../../actions/student_actions';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.split('/')[2]
  let course = state.entities.courses.id
  // let allStudents = Object.keys(state.entities.students).map((id) => state.entities.students[id])
  // let students = allStudents.filter((student) => course.studentIds.includes(student.id))
  return {
    id,
    course
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseProfile);
