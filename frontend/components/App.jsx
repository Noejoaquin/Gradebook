import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session/session_form_container";
import HomeRouterContainer from "./routing/home_router_container";
import TeacherProfileContainer from "./teacher/teacher_profile_container";
import NavContainer from "./nav/nav_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div className='app'>
    <AuthRoute exact path="/" component={SessionFormContainer} />
    <Route path="/n" component={NavContainer} />
    <Switch>
      <Route path="/home" component={HomeRouterContainer} />
      <Route path="/n/teacher/:id" component={TeacherProfileContainer} />
    </Switch>
  </div>
);

export default App;
