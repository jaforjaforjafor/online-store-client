import React from 'react';


const ContactUs= () => {
    return (
        <section  style={{
            background:'black',
        }} 
        className='text-center my-2 '>
            <div className='p-5'>
                <h1 className='text-primary p-2 text-5xl font-bold'>Form</h1>
            <input className='text-green' placeholder='your name'></input><br></br><br></br>
            <input className='text-green' placeholder='your location'></input><br></br><br></br>
            <button className="btn btn-info upper text-black font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">Submit</button>

            </div>
        </section>
    );
};

export default ContactUs;