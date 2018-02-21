import React from "react";

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createStudentIndex = this.createStudentIndex.bind(this)
    this.showView = this.showView.bind(this)
    this.activeTab;
  }

  componentDidMount() {
    this.props.fetchCourse(this.props.id).then(() => {
      this.props.fetchStudents(this.props.id)
    })
  }

  showView(e){
    if (this.activeTab ){
      this.activeTab.childNodes[3].classList.add('hidden')
      this.activeTab.childNodes[3].classList.remove('active')
    }
    this.activeTab = e.currentTarget
    e.currentTarget.childNodes[3].classList.remove('hidden')
    e.currentTarget.childNodes[3].classList.add('active')
  }

  createStudentIndex(students){
     return students.map((student) => {
      return(
        <li onClick={this.showView} key={student.id}>{student.first_name} {student.last_name}
          <div className='student-port hidden'>{student.id}</div>
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
