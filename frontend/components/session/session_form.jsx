import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { email: "", password: "" };
    this.handleGuestTeacherLogin = this.handleGuestTeacherLogin.bind(this);
    this.handleGuestStudentLogin = this.handleGuestStudentLogin.bind(this);
    this.handleGuestAdminLogin = this.handleGuestAdminLogin.bind(this);
  }

  handleChange(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.login(this.state)
  }

  handleGuestTeacherLogin(e){
    this.setState({email: 'noe', password:'starwars'})
    this.handleSubmit
  }

  handleGuestStudentLogin(e){
    this.setState({email: 'Michael', password:'starwars'})
    this.handleSubmit
  }

  handleGuestAdminLogin(){
    this.setState({email:'jack', password:'starwars'})
    this.handleSubmit
  }

  render() {
    let error;
    if (this.props.errors) {
      error = <p className='session-error'>{this.props.errors[0]}</p>;
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
                <button className='login-button login' onSubmit={this.handleSubmit}>login</button>
                <br/>
                <button className='login-button teacher-login' onClick={this.handleGuestTeacherLogin}>Guest Teacher Login</button>
                <br/>
                <button className='login-button teacher-login' onClick={this.handleGuestStudentLogin}>Guest Student Login</button>
                <br/>
                <button className='login-button teacher-login' onClick={this.handleGuestAdminLogin}>Guest Admin Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
