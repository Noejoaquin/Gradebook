import React from 'react';
import ReactDOM from 'react-dom';
import { login, logoutUser } from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.login = login
  window.logoutUser = logoutUser
  ReactDOM.render(<h1>Welcome to Gradebook</h1>, root);
});
