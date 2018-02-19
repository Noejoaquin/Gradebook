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
        <div>
          <h1>Welcome to Gradebook!</h1>
          <h2>Login To Your Account Bellow</h2>
        </div>
        {error}
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              {" "}
              Email
              <input
                onChange={this.handleChange("email")}
                value={this.state.email}
              />
            </label>
            <label>
              {" "}
              Password
              <input
                onChange={this.handleChange("password")}
                value={this.state.password}
              />
            </label>
            <button onSubmit={this.handleSubmit}>login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
