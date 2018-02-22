export const getStudents = (courseId) => (
  $.ajax({
    method: 'GET',
    url: '/api/students',
    data: {courseId}
  })
)
