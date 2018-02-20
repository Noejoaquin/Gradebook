import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import TeacherProfile from "./teacher_profile";

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.currentUser;
  
  return {
    currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TeacherProfile);
