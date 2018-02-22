import React from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

export const TeacherCourseIndexItem = ({name, overallGrade, id}) =>{
  return (
    <li className='profile-index-item'><Link to={`/n/course/${id}`}>
      <div>
        {name}
      </div>
      <div>
        Overall Grade: {overallGrade}
      </div>
      <div>
        Number of Students:
      </div>
    </Link></li>
  )
}
