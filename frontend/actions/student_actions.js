import * as APIUtil from "../util/student_api_util";

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

export const receiveStudents = (students) => ({
  type: RECEIVE_STUDENTS,
  students
});

export const fetchStudents = (courseId) => (dispatch) => {
  return APIUtil.getStudents(courseId)
                 .then((students) => dispatch(receiveStudents(students)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};
