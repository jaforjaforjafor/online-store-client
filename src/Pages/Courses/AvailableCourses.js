import React, { useEffect, useState } from 'react';
import BuyNowModal from './BuyNowModal';
import Service from './Service';

const AvailableCourses = () => {
    const [services,setServices]=useState([]);
    const [buyNow,setBuyNow]=useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
           <h1 className='text-center text-xl text-blue mb-10 font-bold'>  Available Courses </h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                setBuyNow={setBuyNow}
                ></Service>)
            }
            </div> 
            {buyNow && <BuyNowModal 
            setBuyNow={setBuyNow}
            buyNow={buyNow} ></BuyNowModal>}
        </div>
    );
};

export default AvailableCourses;