import React from "react";
import { connect } from "react-redux";
import CourseProfile from "./course_profile";
import { fetchCourse } from '../../actions/course_actions';
import { fetchStudents } from '../../actions/student_actions';

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.location.pathname.split('/')[3])
  let course = state.entities.courses.id
  let students = Object.keys(state.entities.students).map((id) => state.entities.students[id])

  return {
    id,
    course,
    students
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCourse: (id) => dispatch(fetchCourse(id)),
    fetchStudents: (data) => dispatch(fetchStudents(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseProfile);
