import merge from "lodash/merge";
import {
  RECEIVE_STUDENT_ERRORS,
  CLEAR_ERRORS
} from "../actions/student_actions";

const StudentErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_STUDENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default StudentErrorsReducer;
