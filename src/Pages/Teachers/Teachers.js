import React from 'react';
import AvailableTeachers from './AvalibleTeachers';

import TeachersBanner from './TeachersBanner';

const Teachers = () => {
    return (
        <div>
           <h1 className='text-center text-xl text-blue-500 mb-10 font-bold'> Teachers page</h1> 
           <TeachersBanner></TeachersBanner>
            <AvailableTeachers></AvailableTeachers> 
        </div>
    );
};

export default Teachers;