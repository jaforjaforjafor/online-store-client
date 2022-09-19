import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyCourses = () => {
    const [courses,setCourses]=useState([]);
    const [user]=useAuthState(auth);
    const navigate=useNavigate();
    
        useEffect(()=>{
            if (user) {
                fetch(`http://localhost:5000/buying?client=${user.email}`,{
                  method:'GET',
                  headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
                })
                .then(res=>{
                  console.log('res',res);
                  if (res.status===401 || res.status===403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/home')
                  }
                
                 return res.json()})
                .then(data=>{
                  
                  setCourses(data)});
        
                
            }
          
    },[user])
    return (
        <div>
            <h2>My Courses:{courses.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Teacher</th>
      </tr>
    </thead>
    <tbody>
      
    { courses.map((c,index) =><tr>
        <th>{index+1}</th>
        <td>{c.clientName}</td>
        <td>{c.client}</td>
        <td>{c.Name}</td>
        <td>{c.buyNow}</td>
      </tr>)
      
    }
      
      
      
      <tr>
       
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyCourses;