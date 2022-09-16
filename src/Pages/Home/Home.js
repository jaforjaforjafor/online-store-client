import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Medium from './Medium';
import PurchaseOrder from './PurchaseOrder';
import Services from './Services';
import Testimonial from './Testimonial';


const Home = () => {
    return (
        <div>
            <Medium></Medium>
            <Banner></Banner>
            <Services></Services>
            <PurchaseOrder></PurchaseOrder>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            
          
        </div>
    );
};

export default Home;