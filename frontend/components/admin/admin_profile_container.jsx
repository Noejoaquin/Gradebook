import React from "react";
import { connect } from "react-redux";
import AdminProfile from "./admin_profile";
import { fetchCourses } from '../../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
  var courses =[];
  var currentUser = state.session.currentUser;
  var allCourses = Object.keys(state.entities.courses).map((id) => state.entities.courses[id])
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminProfile);
