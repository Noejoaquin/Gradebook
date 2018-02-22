import * as APIUtil from "../util/student_api_util";

export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';
export const RECEIVE_STUDENT = 'RECEIVE_STUDENT';

export const receiveStudents = (students) => ({
  type: RECEIVE_STUDENTS,
  students
});

export const receiveStudent = (student) => ({
  type: RECEIVE_STUDENT,
  student
});

export const fetchStudents = (courseId) => (dispatch) => {
  return APIUtil.getStudents(courseId)
                 .then((students) => dispatch(receiveStudents(students)),
                  (errors) => dispatch(receiveErrors(errors.responseJSON))
                );
};


export const updateStudentGrade = (studentId, grade, courseId) => (dispatch) => {
  return APIUtil.updateStudentGrade(studentId, grade, courseId)
                .then((student) => dispatch(receiveStudent(student)),
                 (errors) => dispatch(receiveErrors(errors.responseJSON))
               );
}
