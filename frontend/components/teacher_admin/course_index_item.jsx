import React from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

export const CourseIndexItem = ({name, overallGrade, id, numberOfSudents}) =>{
  return (
    <li className='profile-index-item'><Link to={`/n/course/${id}`}>
      <div>
        {name}
      </div>
      <div>
        Overall Grade: {overallGrade}
      </div>
      <div>
        Number of Students: {numberOfSudents}
      </div>
    </Link></li>
  )
}