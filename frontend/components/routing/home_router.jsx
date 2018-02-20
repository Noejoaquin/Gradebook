import React from "react";
import { Redirect } from "react-router-dom";

class HomeRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
    if (this.props.currentUser === null ){
      this.props.ownProps.history.push('/login')
    } else {
      
      if (this.props.currentUser.role === "student") {
        this.props.ownProps.history.push(`/n/student/${this.props.currentUser.id}`);
      } else if (this.props.currentUser.role === "teacher") {
        
        this.props.ownProps.history.push(`/n/teacher/${this.props.currentUser.id}`);
      } else {
        this.props.ownProps.history.push(`/n/admin/${this.props.currentUser.id}`);
      }
    }
  }

  render() {
    return <div />;
  }
}

export default HomeRouter;
