import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import StudentErrorsReducer from "./student_errors_reducer";

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  student: StudentErrorsReducer
});

export default ErrorsReducer;
