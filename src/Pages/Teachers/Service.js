import React from 'react';

const Service = ({service,setContact}) => {
    const {Course,Teacher,img}=service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-primary">Teacher:{Teacher}</h2>
          <h4>Teacher:{Teacher}</h4>
          <p>
            {Course.length>0
            ?<span>{Course[0]}</span>
        :<span className='text-red-500'>No Course Available</span>}
          </p>
          <p>Course:{Course.length}{Course.length>1?'spaces':'space'} available</p>
          <div className="card-actions justify-center">
             <label htmlFor="Contact-modal"
              disabled={Course.length===0}
                 onClick={()=>setContact(service)}
              className="btn btn-sm btn-primary uppercase">Contact Me</label>

          </div>
        </div>
      </div>
    );
};

export default Service;