import React from "react";
import { Redirect } from "react-router-dom";

class HomeRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.role === "student") {
      this.props.ownProps.history.push(`/student/${this.props.id}`);
    } else if (this.props.role === "teacher") {
      this.props.ownProps.history.push(`/teacher/${this.props.id}`);
    } else {
      this.props.ownProps.history.push(`/admin/${this.props.id}`);
    }
  }

  render() {
    return <div />;
  }
}

export default HomeRouter;
