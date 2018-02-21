import React from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom';

export const TeacherCourseIndexItem = ({name, overallGrade}) =>{

  return (
    <ul>
      <li>
        Course Name:{name}
      </li>
      <li>
        Overall Grade: {overallGrade}
      </li>
    </ul>
  )
}
