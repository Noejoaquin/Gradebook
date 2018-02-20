import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component{
  constructor(props){
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(){
    this.props.logout();
    this.props.ownProps.history.push('/')
  }

  render() {
    return (
      <div className="nav-container">
        <h1 className="nav-header">Gradebook</h1>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
};


export default NavBar
