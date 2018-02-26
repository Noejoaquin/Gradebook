import React from "react";
import { connect } from "react-redux";
import StudentProfile from "./student_profile";
import { fetchStudent } from '../../actions/student_actions';

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.location.pathname.split('/')[2])
  let allStudents = Object.keys(state.entities.students).map((id) => state.entities.students[id])
  let student = allStudents.filter((student) => student.id === id)[0]
  return {
    id,
    student
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchStudent: (userId) => dispatch(fetchStudent(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
