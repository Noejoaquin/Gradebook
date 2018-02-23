import React from "react";
import { Link } from 'react-router-dom';

class StudentProfile extends React.Component {
  constructor(props) {
    super(props);
    this.makeClassList = this.makeClassList.bind(this)
  }

  componentWillMount(){
    this.props.fetchStudent(this.props.id)
  }

  makeClassList(){
    let grade;
    return this.props.student.courses.map((course) => {
      grade = this.props.student.grades.filter(grade => grade.course_id === course.id)[0]
      return(
        <ul>
          <li className='profile-index-item student-index-item'  key={course.id}>{course.name}</li>
          <li className='student-course-grade'>Grade: {grade.grade}</li>
        </ul>

      )
    })
  }

  render() {
    let classList;
    let title;
    if (this.props.student){
      classList = this.makeClassList()
      title = <h1 className='student-title'>{this.props.student.first_name} {this.props.student.last_name}</h1>
    }
    return (
      <div>
        STUDENT PROFILE
        {title}
        <ul className='profile-index'>
          {classList}
        </ul>
      </div>
    );
  }
}

export default StudentProfile;
