import * as APIUtil from "../util/course_api_util";

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

export const receiveCourses = (courses) => ({
  type: RECEIVE_COURSES,
  courses
});

export const receiveCourse = (course) => ({
  type: RECEIVE_COURSE,
  course
});

export const fetchCourses = (data) => (dispatch) => {
  return APIUtil.getCourses(data)
                 .then((courses) => dispatch(receiveCourses(courses)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};

export const fetchCourse = (id) => (dispatch) => {
  return APIUtil.getCourse(id)
                 .then((course) => dispatch(receiveCourse(course)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};
