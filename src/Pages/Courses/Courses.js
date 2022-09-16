import React from 'react';
import AvailableCourses from './AvailableCourses';
import CoursesBanner from './CoursesBanner';

const Courses = () => {
    return (
        <div>
           <h1 className='text-center text-xl text-blue-500 mb-10 font-bold'> Courses page</h1> 
           <CoursesBanner></CoursesBanner>
           <AvailableCourses></AvailableCourses>
        </div>
    );
};

export default Courses;