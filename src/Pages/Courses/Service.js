import React from 'react';

const Service = ({service,setBuyNow}) => {
    const {Slot,Teacher, Name,img}=service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div className="card-body">
          <h2 className="text-xl font-bold text-primary">Course:{Name}</h2>
          <h3 className="text-xl font-bold text-blue-600">Teacher:{Teacher}</h3>
          <p>
            {Slot.length>0
            ?<span>{Slot[0]}</span>
        :<span className='text-red-500'>No Slot Available</span>}
          </p>
          <p>Slot:{Slot.length}{Slot.length>1?'spaces':'space'} available</p>
          <div className="card-actions justify-center">
             <label htmlFor="Buy-modal"
              disabled={Slot.length===0}
                 onClick={()=>setBuyNow(service)}
              className="btn btn-sm btn-primary uppercase">Buy Now</label>

          </div>
        </div>
      </div>
    );
};

export default Service;