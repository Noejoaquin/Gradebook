import React from "react";

class StudentPortForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {grade: this.props.grade, studentId:this.props.studentId}
    this.handleGradeChange = this.handleGradeChange.bind(this)
  }

  handleGradeChange(e){
    this.setState({grade: e.target.value})
  }

  render() {

    // debugger
    return (
      <form className='student-port hidden'>
        <input onChange={this.handleGradeChange}value={this.state.grade}></input>
      </form>
    );
  }
}

export default StudentPortForm;
