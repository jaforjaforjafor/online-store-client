import React from 'react';
import quote from '../../assets/Images/quote.svg';
import jafor from '../../assets/Images/people1.png';
import sharmi from '../../assets/Images/people2.png';
import jahid from '../../assets/Images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'jafor iqbal',
            location:'Dhaka',
            Description:'Junior web  Developer,student of Stamford University ',
            img: jafor,
        },
        {
            _id:2,
            name:'Sharmi mondal',
            location:'',
            Description:'Junior web  Developer,student of Stamford University ',
            img: sharmi,
        },
        {
            _id:3,
            name:'jahid iqbal',
            location:'feni',
            Description:'Junior web  Developer,student of Stamford University ',
            img: jahid,
        },
    ]
    return (
        <section className='my-20'>
            
            <div className=''>
                <div className='justify-center items-center'>
                    <h4 className="text-xl text-accent font-bold">Testimonials</h4>
                    <h2 className="text-3xl">What Our Customers Say</h2>
                </div>
                <div>
                    <img src={quote} className=' w-24 lg:w-48' alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>) }
            </div>
        </section>
    );
};

export default Testimonial;