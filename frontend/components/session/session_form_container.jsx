import React from 'react';
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
    let errors = state.errors.session
    return {
      errors
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (data) => dispatch(login(data))
  }

}


export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
