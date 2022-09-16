import React from 'react';

const TService = ({tService,setContact}) => {
    const {Course,Teacher,img}=tService;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div class="card-body">
          <h2 class="text-xl font-bold text-primary">Teacher:{Teacher}</h2>
          <h4>Teacher:{Teacher}</h4>
          <p>
            {Course.length>0
            ?<span>{Course[0]}</span>
        :<span className='text-red-500'>No Course Available</span>}
          </p>
          <p>Course:{Course.length}{Course.length>1?'spaces':'space'} available</p>
          <div class="card-actions justify-center">
             <label for="Contact-modal"
              disabled={Course.length===0}
                 onClick={()=>setContact(tService)}
              class="btn btn-sm btn-primary uppercase">Contact Me</label>

          </div>
        </div>
      </div>
    );
};

export default TService;