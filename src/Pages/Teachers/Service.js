import React from 'react';

const Service = ({service,setContact}) => {
    const {Course,Teacher,img}=service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course"  width='200'/></figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-primary">Teacher:{Teacher}</h2>
          <h4> <small className='text-2xl font-bold text-accent'>Course:{Course}</small></h4>
          <p>
            {Course.length>0
            ?<span className='text-yellow-500'> Best in:{Course[4]}</span>
        :<span className='text-red-500'>No Course Available</span>}
          </p>
          <p>{Course.length}{Course.length>1?'spaces':'space'} available</p>
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