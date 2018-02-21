import * as APIUtil from "../util/student_api_util";

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

export const receiveStudents = (courses) => ({
  type: RECEIVE_COURSES,
  students
});

export const fetchStudents = (data) => (dispatch) => {
  return APIUtil.getCourses(data)
                 .then((students) => dispatch(receiveCourses(students)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};
