import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {email:'', password:''}
  }


  handleChange(field){
   return (e) => {
     this.setState( { [field]:e.target.value } )
   }
 }

 handleSubmit(){
   this.props.login(this.state)
 }

  render(){

    return (
      <div>
        <form onSubmit{this.handleSubmit}>
          <label> Email
            <input onChange={this.handleChange('email')}></input>
          </label>
          <label> Password
            <input onChange={this.handleChange('password')}></input>
          </label>
        </form>
      </div>
    )
  }
}


export default SessionForm;
