import React from "react";
import StudentPortFormContainer from './student_port_form_container';

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createStudentIndex = this.createStudentIndex.bind(this)
    this.showView = this.showView.bind(this)
    // this.handleGradeChange = this.handleGradeChange.bind(this)
    // this.state = {}
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

  // handleGradeChange(id){
  //   // debugger
  //   return (e) => {
  //   this.setState({ [id]: e.target.value })
  //   debugger
  //  }
  // }

  // createStudentIndex(students){
  //    return students.map((student) => {
  //      this.state[student.id] = student.grade
  //      let id = student.id
  //     return(
  //       <li onClick={this.showView} key={student.id}>{student.first_name} {student.last_name}
  //         <form className='student-port hidden'>Student Grade:
  //           <input key={student.id} onChange={this.handleGradeChange(student.id)} value={this.state[student.id]}></input>
  //         </form>
  //       </li>
  //     )
  //   })
  // }

  createStudentIndex(students){
     return students.map((student) => {
      return(
        <li onClick={this.showView} key={student.id}>{student.first_name} {student.last_name}
          <StudentPortFormContainer  studentId={student.id} grade={student.grade} />
        </li>
      )
    })
  }

  render() {
    let students;
    if (this.props.students) {
      students = this.createStudentIndex(this.props.students)
    }
    debugger
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
