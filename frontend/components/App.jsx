import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session/session_form_container";
import TeacherProfileContainer from "./teacher_admin/teacher_profile_container";
import AdminProfileContainer from "./teacher_admin/admin_profile_container";
import CourseProfileContainer from "./course/course_profile_container";
import StudentProfileContainer from "./student/student_profile_container";
import NavContainer from "./nav/nav_container";
import { Footer } from "./footer/footer";
import {
  AuthRoute,
  ProtectedRoute,
  NavRoute,
  ProtectedStudentRoute,
  ProtectedAdminRoute,
  ProtectedTeacherAdminRoute
} from "../util/route_util";

const App = () => (
  <div className="app">
    <NavRoute path="/" component={NavContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedTeacherAdminRoute
        exact
        path="/teacher/:id"
        component={TeacherProfileContainer}
      />
      <ProtectedTeacherAdminRoute
        exact
        path="/course/:id"
        component={CourseProfileContainer}
      />
      <ProtectedStudentRoute
        exact
        path="/student/:id"
        component={StudentProfileContainer}
      />
      <ProtectedAdminRoute
        exact
        path="/admin/:id"
        component={AdminProfileContainer}
      />
    </Switch>
    <Route path="/" component={Footer} />
  </div>
);

export default App;
