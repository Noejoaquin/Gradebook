import React from "react";
import { Link, Redirect } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout().then(() => this.props.ownProps.history.push("/"));
  }

  render() {
    let profilePath;
    let redirect;
    if (this.props.currentUser && this.props.currentUser.role !== "student") {
      if (
        this.props.currentUser.role === "admin" &&
        !this.props.ownProps.location.pathname.includes("admin")
      ) {
        profilePath = `/n/admin/${this.props.currentUser.id}`;
        redirect = (
          <Link to={profilePath}>
            <div className="nav-button">Back To Profile</div>
          </Link>
        );
      } else if (
        this.props.currentUser.role === "teacher" &&
        !this.props.ownProps.location.pathname.includes("teacher")
      ) {
        profilePath = `/n/teacher/${this.props.currentUser.id}`;
        redirect = (
          <Link to={profilePath}>
            <div className="nav-button">Back To Profile</div>
          </Link>
        );
      }
    }
    return (
      <div className="nav-container">
        <h1 className="nav-header">Gradebook</h1>
        {redirect}
        <div className="nav-button logout" onClick={this.handleLogout}>
          Logout
        </div>
        <div className="border-bottom" />
      </div>
    );
  }
}

export default NavBar;
