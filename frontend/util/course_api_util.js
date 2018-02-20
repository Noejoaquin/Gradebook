export const getCourses = () => (
  $.ajax({
    method: 'GET',
    url: '/api/courses',
  })
)
