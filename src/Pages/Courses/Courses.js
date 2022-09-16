import React from 'react';
import AvailableCourses from './AvailableCourses';
import CoursesBanner from './CoursesBanner';

const Courses = () => {
    return (
        <div>
           <h1> this is Courses page</h1> 
           <CoursesBanner></CoursesBanner>
           <AvailableCourses></AvailableCourses>
        </div>
    );
};

export default Courses;