import * as APIUtil from "../util/course_api_util";

export const RECEIVE_COURSES = 'RECEIVE_COURSES';

export const receiveCourses = (courses) => ({
  type: RECEIVE_COURSES,
  courses
});

export const fetchCourses = () => (dispatch) => {
  return APIUtil.getCourses()
                 .then((courses) => dispatch(receiveCourses(courses)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};
