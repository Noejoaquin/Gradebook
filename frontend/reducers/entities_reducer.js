import { combineReducers } from "redux";
import CoursesReducer from "./courses_reducer";
import StudentsReducer from "./students_reducer";

const EntitiesReducer = combineReducers({
  courses: CoursesReducer,
  students: StudentsReducer
});

export default EntitiesReducer;
