import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import Profile from "./profile";
import { fetchCourses } from '../../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
  var courses =[];
  var currentUser = state.session.currentUser;
  var allCourses = Object.keys(state.entities.courses).map((id) => state.entities.courses[id])
  if (allCourses.length > 1) {
   courses = allCourses.filter((course) => {
     return state.session.currentUser.courses.includes(course.id)

 })
}
  return {
    currentUser,
    courses
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCourses: (data) => dispatch(fetchCourses(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
