import React from 'react';
import carousel0 from '../../assets/Images/home-2.jpg';
import carousel1 from '../../assets/Images/home-3.jpg';
import carousel2 from '../../assets/Images/home-4.jpg';
import carousel3 from '../../assets/Images/home-1.jpg';

const Medium = () => {
    return (
        <div>
           <h1  className="text-5xl font-bold  my-10"> Education</h1> 
           <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
  <img src={carousel0} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src={carousel1} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img src={carousel2} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img src={carousel3} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Medium;