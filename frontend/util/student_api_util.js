export const getStudents = (courseId) => (
  $.ajax({
    method: 'GET',
    url: '/api/students',
    data: {courseId}
  })
)

export const updateStudentGrade = (studentId, grade, courseId) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/students/${studentId}`,
    data: {studentId, grade, courseId}
  })
)
