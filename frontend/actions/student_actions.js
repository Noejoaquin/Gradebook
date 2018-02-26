import * as APIUtil from "../util/student_api_util";

export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_STUDENT_ERRORS = "RECEIVE_STUDENT_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveStudents = students => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveErrors = errors => ({
  type: RECEIVE_STUDENT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const receiveStudent = student => ({
  type: RECEIVE_STUDENT,
  student
});

export const fetchStudents = courseId => dispatch => {
  return APIUtil.getStudents(courseId).then(
    students => dispatch(receiveStudents(students)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchStudent = userId => dispatch => {
  return APIUtil.getStudent(userId).then(
    student => dispatch(receiveStudent(student)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updateStudentGrade = data => dispatch => {
  return APIUtil.updateStudentGrade(data).then(
    student => dispatch(receiveStudent(student)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
