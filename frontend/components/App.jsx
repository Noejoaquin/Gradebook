import React from "react";
import { Route, Switch } from "react-router-dom";
import SessionFormContainer from "./session/session_form_container";
import HomeRouterContainer from "./routing/home_router_container";
import TeacherProfileContainer from "./teacher/teacher_profile_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <AuthRoute path="/" component={SessionFormContainer} />
    <Switch>
      <Route path="/home" component={HomeRouterContainer} />
      <Route path="/teacher/:id" component={TeacherProfileContainer} />
    </Switch>
  </div>
);

export default App;
