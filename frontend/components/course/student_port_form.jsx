import React from "react";

class StudentPortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {studentId:this.props.studentId, grade: this.props.grade, courseId:this.props.courseId}
    this.handleGradeChange = this.handleGradeChange.bind(this)
    this.originalState = {grade: this.props.grade}
    this.updateStudentGrade = this.props.updateStudentGrade
    this.changeGrade = this.changeGrade.bind(this)
    this.constuctError = this.constuctError.bind(this)
  }

  handleGradeChange(e){
    this.setState({grade: e.target.value})
  }

  changeGrade(e){
    e.preventDefault()
    this.props.clearErrors()
    this.updateStudentGrade(this.state)
  }

  constuctError(){
    if (this.props.errors) {
     return <p className='session-error'>{this.props.errors[0]}</p>;
    } else {
      return <p />;
    }
  }

  render() {
    let button;
    let error = this.constuctError()

    if (this.state.grade !== this.originalState.grade){
      button = <button className='update-button' onClick={this.changeGrade} >Update Student's Grade</button>
    }

    return (
      <form className='student-port'>
        <div className='form-content'>
          <h1 className='student-form-name'>{this.props.firstName} {this.props.lastName}</h1>
          <h3 className='current-grade-label'>Current Grade:</h3>
          {error}
          <li className='grade-input-container'>
            <input type='number' onChange={this.handleGradeChange} className='grade-input' value={this.state.grade}></input> / 100
          </li>
          { button }
        </div>
      </form>
    );
  }
}

export default StudentPortForm;
