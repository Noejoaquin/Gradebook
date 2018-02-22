import { RECEIVE_STUDENTS, RECEIVE_STUDENT } from '../actions/student_actions';
import merge from 'lodash/merge';


const StudentsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_STUDENTS:
      return action.students;
    case RECEIVE_STUDENT:
      return merge({}, state, { [action.student.id]: action.student });
    default:
      return state;
  }
}

export default StudentsReducer;
