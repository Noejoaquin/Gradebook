export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });

export const logoutUser = () =>
  $.ajax({
    method: "DELETE",
    url: `/api/session`
  });
