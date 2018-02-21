export const getStudents = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/students',
    data: {data}
  })
)
