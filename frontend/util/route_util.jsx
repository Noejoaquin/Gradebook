
import React from 'react'
import { connect } from 'react-redux';
import {Route, Redirect, withRouter}  from 'react-router-dom';


const Auth = ({component: Component, path, loggedIn, currentUser}) => {
  let nextPath;
  if (loggedIn && currentUser.role === 'teacher'){
    nextPath = `/n/teacher/${currentUser.id}`
  } else if (loggedIn && currentUser.role === 'student'){
    nextPath = `/n/student/${currentUser.id}`
  } else if (loggedIn) {
    nextPath = `/n/admin/${currentUser.id}`
  }

  return (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to={
          nextPath
        }
         />
    )
  )}/>
  )
};

const Protected = ({component: Component, path, loggedIn, currentUser}) => {
  return (
  <Route path={path} render={(props) => {
      if (loggedIn && currentUser.role !== 'student'){
        debugger
        return <Component {...props} />
      } else if (loggedIn && currentUser.role === 'student' && !path.includes('course') && !path.includes('teacher') && !path.includes('admin')){
        return <Component {...props} />
      } else {
        return <Redirect to='/' />
      }
  }}/>
)};


const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    currentUser: state.session.currentUser
  };
}

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
