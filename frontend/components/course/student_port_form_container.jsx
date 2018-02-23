import React from "react";
import { connect } from "react-redux";
import StudentPortForm from './student_port_form';
import { updateStudentGrade, clearErrors } from '../../actions/student_actions';

const mapStateToProps = (state, ownProps) => {
  let studentId = ownProps.studentId
  let courseId = ownProps.courseId
  let grade = ownProps.grades.filter((grade) => grade.course_id === courseId)[0].grade
  let firstName = ownProps.firstName
  let lastName = ownProps.lastName
  let errors = state.errors.student
  return {
    studentId,
    grade,
    courseId,
    firstName,
    lastName,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateStudentGrade: (studentId, grade, courseId) => dispatch(updateStudentGrade(studentId, grade, courseId)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentPortForm);
