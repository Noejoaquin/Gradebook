export const getCourses = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/courses',
    data: {data}
  })
)
