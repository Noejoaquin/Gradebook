import React from "react";

class CourseProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    this.props.fetchCourse(this.props.id) //.then(() => this.props.fetchStudents(this.props.id))
  }

  componentWillUpdate(){
    debugger
    this.props.fetchStudents(this.props.id)
  }

  render() {

    return (
      <div className='course-profile-container'>
        COURSE PROFILE
      </div>
    );
  }
}

export default CourseProfile;
