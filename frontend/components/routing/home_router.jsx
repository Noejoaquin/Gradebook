import React from 'react';
import { Redirect } from 'react-router-dom';

class HomeRouter extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    if (this.props.role === 'student'){
      <Redirect to={`/home/student/${this.props.id}`} />
    } else if (this.props.role === 'teacher') {
      <Redirect to={`/home/teacher/${this.props.id}`} />
    } else {
      <Redirect to={`/home/admin/${this.props.id}`} />
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
