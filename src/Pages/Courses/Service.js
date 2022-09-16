import React from 'react';

const Service = ({service,setBuyNow}) => {
    const {Slot,Teacher, Name,img}=service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
        <figure><img src={img} alt="Course" /></figure>
        <div class="card-body">
          <h2 class="text-xl font-bold text-primary">Course:{Name}</h2>
          <h4>Teacher:{Teacher}</h4>
          <p>
            {Slot.length>0
            ?<span>{Slot[0]}</span>
        :<span className='text-red-500'>No Slot Available</span>}
          </p>
          <p>Slot:{Slot.length}{Slot.length>1?'spaces':'space'} available</p>
          <div class="card-actions justify-center">
             <label for="Buy-modal"
              disabled={Slot.length===0}
                 onClick={()=>setBuyNow(service)}
              class="btn btn-sm btn-primary uppercase">Buy Now</label>

          </div>
        </div>
      </div>
    );
};

export default Service;