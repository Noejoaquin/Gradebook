import React from "react";
import { connect } from "react-redux";
import StudentPortForm from './student_port_form';

const mapStateToProps = (state, ownProps) => {
  let studentId = ownProps.studentId
  let grade = ownProps.grade
  return {
    studentId,
    grade
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPortForm);
