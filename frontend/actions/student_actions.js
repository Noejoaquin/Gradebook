import * as APIUtil from "../util/student_api_util";

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

export const receiveStudents = (students) => ({
  type: RECEIVE_STUDENTS,
  students
});

export const fetchStudents = (data) => (dispatch) => {
  return APIUtil.getStudents(data)
                 .then((students) => dispatch(receiveStudents(students)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};
