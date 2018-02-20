import React from "react";

class TeacherProfile extends React.Component {
  constructor(props) {
    super(props);
    this.courses = this.props.courses
  }

  componentDidMount(){
    if (this.props.courses.length === 0){
      this.props.fetchCourses()
    }
  }

  render() {
    let course;
    if (this.props.courses.length !== 0){
      debugger
      course = <li>{this.props.courses[0].name}</li>
    }
    return(
      <div>
        TeacherProfile
        {course}
      </div>
    )
  }
}

export default TeacherProfile;
