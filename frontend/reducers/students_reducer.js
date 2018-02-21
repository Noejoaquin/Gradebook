import { RECEIVE_STUDENTS } from '../actions/student_actions';
import merge from 'lodash/merge';


const StudentsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_STUDENTS:
      return action.students;
    default:
      return state;
  }
}

export default StudentsReducer;
