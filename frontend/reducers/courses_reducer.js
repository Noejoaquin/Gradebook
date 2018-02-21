import { RECEIVE_COURSES, RECEIVE_COURSE } from "../actions/course_actions";
import merge from "lodash/merge";

const CoursesReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COURSES:
      return action.courses;
    case RECEIVE_COURSE:
      return merge({}, state, { [action.course.id]: action.course });
    default:
      return state;
  }
};

export default CoursesReducer;
