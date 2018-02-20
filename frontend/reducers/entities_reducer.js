import { combineReducers } from 'redux';
import CoursesReducer from './courses_reducer';

const EntitiesReducer = combineReducers({
  courses: CoursesReducer,
})


export default EntitiesReducer;
