import React from "react";

class StudentPortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {studentId:this.props.studentId, grade: this.props.grade, courseId:this.props.courseId}
    this.handleGradeChange = this.handleGradeChange.bind(this)
    this.originalState = {grade: this.props.grade}
    this.updateStudentGrade = this.props.updateStudentGrade
    this.changeGrade = this.changeGrade.bind(this)
  }

  handleGradeChange(e){
    this.setState({grade: e.target.value})
  }

  changeGrade(e){
    e.preventDefault()
    this.updateStudentGrade(this.state)
  }

  render() {
    let button;
    if (this.state.grade !== this.originalState.grade){
      button = <button onClick={this.changeGrade} >Update Student's Grade</button>
    }
    //
    return (
      <form className='student-port hidden'>
        <input onChange={this.handleGradeChange}value={this.state.grade}></input>
        { button }
      </form>
    );
  }
}

export default StudentPortForm;
