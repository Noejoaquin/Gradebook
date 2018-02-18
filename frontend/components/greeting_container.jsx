import React from 'react';
import EventSearchContainer from './event_search_container';
import SessionFormContainer from './session/session_form_container';

export const Greeting = () => {

  render(){
    return (
      <div>
        <h1>
          Welcome to Gradebook!
        </h1>
        <h3> Are you a...</h3>
        <ul>
          <li>Student?</li>
          <li>Teacher?</li>
          <li>Administrator?</li>
        </ul>
      </div>
    )
  }
}
