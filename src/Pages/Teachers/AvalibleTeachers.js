import React, { useEffect, useState } from 'react';
import ContactModal from './ContactModal';
import Service from './Service';

const AvailableTeachers = () => {
    const [services,setServices]=useState([]);
    const [contact,setContact]=useState(null);

    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    return (
        <div>
           <h1 className='text-center text-xl text-blue-500 mb-10 font-bold'>  Available Teachers </h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                setContact={setContact}
                ></Service>)
            }
            </div> 
            {contact && <ContactModal
            setContact={setContact}
            contact={contact} ></ContactModal>}
        </div>
    );
};

export default AvailableTeachers;