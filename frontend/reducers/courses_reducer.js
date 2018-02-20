import { RECEIVE_COURSES } from '../actions/course_actions';
import merge from 'lodash/merge';


const CoursesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_COURSES:
      return action.events;
    default:
      return state;
  }
}

export default CoursesReducer;
