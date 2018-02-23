import React from "react";
import { Link } from 'react-router-dom';

class StudentPortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {studentId:this.props.studentId, grade: this.props.grade, courseId:this.props.courseId}
    this.handleGradeChange = this.handleGradeChange.bind(this)
    this.originalState = {grade: this.props.grade}
    this.updateStudentGrade = this.props.updateStudentGrade
    this.changeGrade = this.changeGrade.bind(this)
    this.constuctError = this.constuctError.bind(this)
    this.updateButton = false
    this.button;
  }

  handleGradeChange(e){
    this.updateButton = true;
    this.setState({grade: e.target.value})
  }

  changeGrade(e){
    e.preventDefault()
    this.props.clearErrors()
    this.button = null
    this.updateButton = false
    this.updateStudentGrade(this.state)
  }

  constuctError(){
    if (this.props.errors) {
     return <p className='session-error'>{this.props.errors[0]}</p>;
    } else {
      return <p />;
    }
  }

  checkButton(){
    if (this.updateButton){
      this.button = <button className='update-button' onClick={this.changeGrade} >Update Student's Grade</button>
    }
  }


  render() {
    let button;
    let error = this.constuctError()
    this.checkButton()

    return (
      <form className='student-port'>
        <div className='form-content'>
          <h1 className='student-form-name'>{this.props.firstName} {this.props.lastName}</h1>
          <h3 className='link-to-student-profile'><Link to={`/n/student/${this.props.studentId}`}>Visit their profile</Link></h3>
          <h3 className='current-grade-label'>Current Grade:</h3>
          {error}
          <li className='grade-input-container'>
            <input type='number' onChange={this.handleGradeChange} className='grade-input' value={this.state.grade}></input> / 100
          </li>
          { this.button }
        </div>
      </form>
    );
  }
}

export default StudentPortForm;
