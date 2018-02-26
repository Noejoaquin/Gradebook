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
    e.preventDefault()
    this.props.login({email: 'Michael', password:'starwars'})
  }

  handleGuestStudentLogin(e){
    e.preventDefault()
    this.props.login({email: 'Obi', password:'starwars'})
  }

  handleGuestAdminLogin(e){
    e.preventDefault()
    this.props.login({email:'Jack', password:'starwars'})
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
            <form>
              <label>
                {" "}
                <li className='field'>Email</li>
                <li>
                  <input
                    className='session-input'
                    onChange={this.handleChange("email")}
                    value={this.state.email}
                  />
                </li>
              </label>
              <label>
                {" "}
                <li className='field'>Password</li>
                <li className='password'>
                  <input
                    className='session-input'
                    type="password"
                    onChange={this.handleChange("password")}
                    value={this.state.password}
                  />
                </li>
              </label>
                <button className='login-button login' onClick={this.handleSubmit}>Login</button>
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
