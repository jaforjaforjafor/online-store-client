import React from 'react';
import Service from './Service';
import  Bangla from '../../assets/Images/food-banner.jpg';
import  English from '../../assets/Images/food-banner.jpg';
import  Math from '../../assets/Images/food-banner.jpg';


const Services = () => {

    const services =[
        {
            _id:1,
            name: 'Bangla',
            description:'pure and good quality and machinarise',
            img: Bangla 

    },
        {
            _id:2,
            name: 'English',
            description:'pure and good quality and machinarise',
            img: English 

    },
        {
            _id:3,
            name: 'Math',
            description:'pure and good quality and machinarise',
            img: Math 

    },

    ]
    return (
        <div className='my-28 '>
            <div className='text-center '>
            <h3 className='text-accent text-xl font-bold uppercase'> Our Services</h3>
            <h2 className='text-4xl'>Services We Provide</h2>

        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                services.map(service => <Service
                key={service._id}
                service={service}
                ></Service>)
            }

        </div>
        </div>
    );
};

export default Services;