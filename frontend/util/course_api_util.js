export const getCourses = (data) => (
  $.ajax({
    method: 'GET',
    url: '/api/courses',
    data: {data}
  })
)

export const getCourse = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/courses/${id}`,
  })
)
