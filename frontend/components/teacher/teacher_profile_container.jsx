import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import TeacherProfile from "./teacher_profile";
import { fetchCourses } from '../../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  let allCourses= Object.keys(state.entities.courses).map((id) => state.entities.courses[id])
  let courses = allCourses.filter((course) => state.session.currentUser.courses.includes(course.id))
  return {
    currentUser,
    courses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCourses: () => dispatch(fetchCourses())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherProfile);
