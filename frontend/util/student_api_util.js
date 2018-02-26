export const getStudents = courseId =>
  $.ajax({
    method: "GET",
    url: "/api/students",
    data: { courseId }
  });

export const getStudent = userId =>
  $.ajax({
    method: "GET",
    url: `/api/students/${userId}`,
    data: { userId }
  });

export const updateStudentGrade = data =>
  $.ajax({
    method: "PATCH",
    url: `/api/students/${data.studentId}`,
    data: { data }
  });
