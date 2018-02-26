import React from "react";
import { connect } from "react-redux";
import CourseProfile from "./course_profile";
import { fetchCourse } from "../../actions/course_actions";
import { fetchStudents, clearErrors } from "../../actions/student_actions";

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.location.pathname.split("/")[2]);
  let course = state.entities.courses[id];
  let students = Object.keys(state.entities.students).map(
    id => state.entities.students[id]
  );
  let currentUser = state.session.currentUser;
  return {
    id,
    course,
    students,
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCourse: id => dispatch(fetchCourse(id)),
    fetchStudents: courseId => dispatch(fetchStudents(courseId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseProfile);
