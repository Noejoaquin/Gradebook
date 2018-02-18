import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container'


const App = () => (
  <div>
   <Route path="/" component={SessionFormContainer} />
  </div>
);

export default App;
