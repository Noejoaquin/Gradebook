import React from "react";
import StudentPortFormContainer from './student_port_form_container';

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createStudentIndex = this.createStudentIndex.bind(this)
    this.showView = this.showView.bind(this)
    this.activeTab;
    this.courseId = this.props.id
    this.createStudentViewPorts = this.createStudentViewPorts.bind(this)
    this.selectViewPort = this.selectViewPort.bind(this)
    this.state = {content:''}
  }

  componentDidMount() {
    this.props.fetchCourse(this.props.id).then(() => {
      this.props.fetchStudents(this.props.id)
    })
  }

  // showView(e){
  //   if (this.activeTab ){
  //     this.activeTab.childNodes[3].classList.add('hidden')
  //     this.activeTab.childNodes[3].classList.remove('active')
  //   }
  //   this.activeTab = e.currentTarget
  //   e.currentTarget.childNodes[3].classList.remove('hidden')
  //   e.currentTarget.childNodes[3].classList.add('active')
  // }

  selectViewPort(id){
    let content = this.viewPorts.filter((port) => eval(port.key) === id)[0]
    this.setState({content})
  }

  createStudentIndex(students){
     return students.map((student, i) => {
      return(
          <li onClick={() => this.selectViewPort(student.id)} className='profile-index-item student-index-item'  key={student.id}>{student.first_name} {student.last_name}</li>
      )
    })
  }

  createStudentViewPorts(students){
    return students.map((student) => {
     return(
       <StudentPortFormContainer key={student.id} className='port-form' courseId={this.courseId} studentId={student.id} grade={student.grade} />
     )
    })
  }

  render() {
    let students;
    let title;
    let viewPorts;
    if (this.props.students && this.props.course) {
      title = <h1 className='course-title'>{this.props.course.name}</h1>
      students = this.createStudentIndex(this.props.students)
      this.viewPorts = this.createStudentViewPorts(this.props.students)
    }

    return (
      <div className='course-profile-container'>
        {title}
       <ul className='profile-index student-index'>
         {students}
       </ul>
       {this.state.content}
      </div>
    );
  }
}

export default CourseProfile;
