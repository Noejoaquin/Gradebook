import React from "react";

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createStudentIndex = this.createStudentIndex.bind(this)
    this.showView = this.showView.bind(this)
  }

  componentDidMount() {
    this.props.fetchCourse(this.props.id).then(() => {
      this.props.fetchStudents(this.props.id)
    })
  }

  showView(e){
    e.currentTarget.classList.add('active')
  }

  createStudentIndex(students){
     return students.map((student) => {
      return(
        <li onClick={this.showView} key={student.id}>{student.first_name} {student.last_name}
          <div className='student-port'>{student.id}</div>
        </li>
      )
    })
  }

  render() {
    let students;
    if (this.props.students) {
      students = this.createStudentIndex(this.props.students)
    }
    return (
      <div className='course-profile-container'>
        COURSE PROFILE
       <ul>
         {students}
       </ul>

      </div>
    );
  }
}

export default CourseProfile;
