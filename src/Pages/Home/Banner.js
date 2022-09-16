import React from 'react';
import banner from '../../assets/Images/pic.jpeg';

const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-300 my-5">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div>
      <h1 class="text-5xl font-bold">Your favourite Online Education System is here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
  </div>
       
</div>
    );
};

export default Banner;