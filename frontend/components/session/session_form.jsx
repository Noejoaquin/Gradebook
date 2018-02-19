import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: "", password: "" };
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit() {
    this.props.login(this.state);
  }

  render() {
    let error;
    if (this.props.errors) {
      error = <p>{this.props.errors[0]}</p>;
    } else {
      error = <p />;
    }

    return (
      <div>
        <div className="session-form-header">
          <h1 id="header-1">Welcome to Gradebook!</h1>
          <h2 id="header-2">Login To Your Account Below</h2>
        </div>
        <div className="session-form-container">
          {error}
          <div className="session-form">
            <form onSubmit={this.handleSubmit}>
              <label>
                {" "}
                <li className='field'>Email</li>
                <li>
                  <input
                    onChange={this.handleChange("email")}
                    value={this.state.email}
                  />
                </li>
              </label>
              <label>
                {" "}
                <li className='field'>Password</li>
                <li>
                  <input
                    onChange={this.handleChange("password")}
                    value={this.state.password}
                  />
                </li>
              </label>
              <button className='login-button' onSubmit={this.handleSubmit}>login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
