import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session/session_form_container";
import TeacherProfileContainer from "./teacher_admin/teacher_profile_container";
import AdminProfileContainer from './teacher_admin/admin_profile_container';
import CourseProfileContainer from './course/course_profile_container';
import StudentProfileContainer from './student/student_profile_container';
import NavContainer from "./nav/nav_container";
import { Footer } from './footer/footer';
import { AuthRoute, ProtectedRoute, ProtectedStudentRoute, ProtectedAdminRoute, ProtectedTeacherAdminRoute } from "../util/route_util";

const App = () => (
  <div className='app'>
    <Route path="/n" component={NavContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedTeacherAdminRoute exact path="/n/teacher/:id" component={TeacherProfileContainer} />
      <ProtectedTeacherAdminRoute exact path='/n/course/:id' component={CourseProfileContainer} />
      <ProtectedStudentRoute exact path='/n/student/:id' component={StudentProfileContainer} />
      <ProtectedAdminRoute exact path='/n/admin/:id' component={AdminProfileContainer} />
    </Switch>
    <Route path='/n' component={Footer} />
  </div>
);

export default App;
