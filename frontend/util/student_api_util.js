export const getStudents = (courseId) => (
  $.ajax({
    method: 'GET',
    url: '/api/students',
    data: {courseId}
  })
)

export const updateStudentGrade = (data) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/students/${data.studentId}`,
    data: {data}
  })
)
