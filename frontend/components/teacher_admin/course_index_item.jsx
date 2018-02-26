import React from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

export const CourseIndexItem = ({name, overallGrade, id, numberOfSudents, currentUser, teacher}) => {
  let taughtBy;
  if (currentUser.role === 'admin'){
    taughtBy = <div>Taught By: {teacher} </div>
  }
  return (
    <li className='profile-index-item'><Link to={`/n/course/${id}`}>
      <div className='course-name'>
        {name}
      </div>
      <div>
        Overall Grade: {overallGrade}
      </div>
      <div>
        Number of Students: {numberOfSudents}
      </div>
      {taughtBy}
    </Link></li>
  )
}
