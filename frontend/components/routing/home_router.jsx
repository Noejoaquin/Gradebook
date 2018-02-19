import React from 'react';
import { Redirect } from 'react-router-dom';

class HomeRouter extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.role === 'student'){
      this.props.ownProps.history.push(`/home/student/${this.props.id}`)
    } else if (this.props.role === 'teacher') {
      this.props.ownProps.history.push(`/home/teacher/${this.props.id}`)
    } else {
      this.props.ownProps.history.push(`/home/admin/${this.props.id}`)
    }
  }

  render(){
    return (
      <div>
      </div>
    )
  }
}

export default HomeRouter
