import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, currentUser }) => {
  let nextPath;
  if (loggedIn && currentUser.role === "teacher") {
    nextPath = `/teacher/${currentUser.id}`;
  } else if (loggedIn && currentUser.role === "student") {
    ("");
    nextPath = `/student/${currentUser.id}`;
  } else if (loggedIn) {
    nextPath = `/admin/${currentUser.id}`;
  }

  return (
    <Route
      path={path}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to={nextPath} />
      }
    />
  );
};

const Nav = ({ component: Component, path, loggedIn, currentUser }) => {
  "";
  return (
    <Route
      path={path}
      render={props => {
        if (loggedIn) {
          return <Component {...props} />;
        } else {
          return "";
        }
      }}
    />
  );
};

const ProtectedTeacherAdmin = ({
  component: Component,
  path,
  loggedIn,
  currentUser
}) => {
  return (
    <Route
      path={path}
      render={props => {
        if (loggedIn && currentUser.role !== "student") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const ProtectedTeacher = ({
  component: Component,
  path,
  loggedIn,
  currentUser
}) => {
  return (
    <Route
      path={path}
      render={props => {
        if (loggedIn && currentUser.role !== "teacher") {
          return <Redirect to="/" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const ProtectedStudent = ({
  component: Component,
  path,
  loggedIn,
  currentUser
}) => {
  return (
    <Route
      path={path}
      render={props => {
        if (loggedIn && currentUser.role !== "student") {
          return <Component {...props} />;
        } else if (
          loggedIn &&
          currentUser.role === "student" &&
          parseInt(props.location.pathname.split("/")[2]) === currentUser.id
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const ProtectedAdmin = ({
  component: Component,
  path,
  loggedIn,
  currentUser
}) => {
  return (
    <Route
      path={path}
      render={props => {
        if (loggedIn && currentUser.role === "admin") {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedTeacherAdminRoute = withRouter(
  connect(mapStateToProps, null)(ProtectedTeacherAdmin)
);
export const ProtectedStudentRoute = withRouter(
  connect(mapStateToProps, null)(ProtectedStudent)
);
export const ProtectedAdminRoute = withRouter(
  connect(mapStateToProps, null)(ProtectedAdmin)
);
export const ProtectedTeacherRoute = withRouter(
  connect(mapStateToProps, null)(ProtectedTeacher)
);
export const NavRoute = withRouter(connect(mapStateToProps, null)(Nav));
