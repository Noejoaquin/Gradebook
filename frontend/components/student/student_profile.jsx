import React from "react";
import { Link } from 'react-router-dom';

class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.makeClassList = this.makeClassList.bind(this)
  }

  componentWillMount(){
    debugger
    this.props.fetchStudent(this.props.id)
  }

  makeClassList(){
    let grade;
    debugger
    return this.props.student.courses.map((course) => {
      grade = this.props.student.grades.filter(grade => grade.course_id === course.id)[0]
      return(
        <ul className='profile-index-item student-profile-index-item'>
          <li className='student-course-name'  key={course.id}>{course.name}</li>
          <li className='student-course-grade'>Grade: {grade.grade}</li>
        </ul>

      )
    })
  }

  render() {
    let classList;
    let title;
    let gpa;
    if (this.props.student && this.props.student.courses){
      debugger
      classList = this.makeClassList()
      title = <h1 className='student-title'>{this.props.student.first_name} {this.props.student.last_name}</h1>
      gpa = <h2 className='student-gpa'>Overall Gpa: {this.props.student.gpa}</h2>
    }
    return (
      <div className='student-profile-container'>
        {title}
        {gpa}
        <ul className='profile-container course-list-container'>
          {classList}
        </ul>
      </div>
    );
  }
}

export default StudentProfile;