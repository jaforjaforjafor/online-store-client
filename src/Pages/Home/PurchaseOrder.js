import React from 'react';
import makeorder from '../../assets/Images/doctor.png';
import bgimage from '../../assets/Images/appointment.png'
import OrderButton from '../Shared/OrderButton';

const PurchaseOrder = () => {
   
    return (
        
        <section  style={{
            background:`url(${bgimage})`
        }} 
        className='flex justify-center items-center mt-5'>
            
            <div className='flex-1 '>
                <img className='mt-[-150px]' src={makeorder} alt="" />
            </div>
            <div className='flex-1'>
            <h3 className='text-xl text-accent font-bold'>Purchase Order</h3>
            <h2 className='text-3xl text-white'>Please Order Now </h2>
            <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos ipsam reprehenderit consequatur quibusdam ex ratione, suscipit officiis quisquam velit esse?</p>
            <OrderButton>Order Your Preferable Course</OrderButton>

            </div>
        </section>
    );
};

export default PurchaseOrder;