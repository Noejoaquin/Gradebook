import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session/session_form_container";
import TeacherProfileContainer from "./teacher/teacher_profile_container";
import AdminProfileContainer from './admin/admin_profile_container';
import CourseProfileContainer from './course/course_profile_container';
import StudentProfileContainer from './student/student_profile_container';
import NavContainer from "./nav/nav_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div className='app'>
    <Route path="/n" component={NavContainer} />
    <Switch>
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <ProtectedRoute exact path="/n/teacher/:id" component={TeacherProfileContainer} />
      <ProtectedRoute exact path='/n/course/:id' component={CourseProfileContainer} />
      <Route exact path='/n/student/:id' component={StudentProfileContainer} />
      <Route exact path='/n/admin/:id' component={AdminProfileContainer} />
    </Switch>
  </div>
);

export default App;
