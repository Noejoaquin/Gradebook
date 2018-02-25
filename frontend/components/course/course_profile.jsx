import React from "react";
import StudentPortFormContainer from './student_port_form_container';

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.createStudentIndex = this.createStudentIndex.bind(this)
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

  selectViewPort(id){
    let content = this.viewPorts.filter((port) => eval(port.key) === id)[0]
    this.setState({content})
    this.props.clearErrors()
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
       <StudentPortFormContainer firstName={student.first_name} lastName={student.last_name} key={student.id} className='port-form' courseId={this.courseId} studentId={student.id} grades={student.grades} />
     )
    })
  }

  render() {
    let students;
    let title;
    let viewPorts;
    let teacher;
    let emptyViewPortMessage;
    if (this.props.students && this.props.course && this.props.currentUser) {
      title = <h1 className='course-title'>{this.props.course.name}</h1>
      students = this.createStudentIndex(this.props.students)
      teacher = this.props.currentUser.role === 'admin' ? <h1 className='teacher'>Teacher : {this.props.course.teacher}</h1> : <h1></h1>
      this.viewPorts = this.createStudentViewPorts(this.props.students)
    }
    if (this.state.content === ''){
      emptyViewPortMessage = <li id='empty-message' className='empty-view-port-message'>There is no student selected</li>
    }
    return (
      <div className='course-profile-container'>
        {title}
        {teacher}
        <div className='index-port-container'>
          <ul className='profile-index student-index'>
            {students}
          </ul>
          <div className='student-port-container'>
            {emptyViewPortMessage}
            {this.state.content}
          </div>
        </div>
        </div>
    );
  }
}

export default CourseProfile;
