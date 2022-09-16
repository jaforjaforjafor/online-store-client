import React from 'react';
import carousel0 from '../../assets/Images/home-2.jpg';
import carousel1 from '../../assets/Images/home-3.jpg';
import carousel2 from '../../assets/Images/home-4.jpg';
import carousel3 from '../../assets/Images/home-1.jpg';

const Medium = () => {
    return (
        <div>
           <h1  class="text-5xl font-bold  my-10"> Education</h1> 
           <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
  <img src={carousel0} class="w-full" />
  </div> 
  <div id="item2" class="carousel-item w-full">
    <img src={carousel1} class="w-full" />
  </div> 
  <div id="item3" class="carousel-item w-full">
  <img src={carousel2} class="w-full" />
  </div> 
  <div id="item4" class="carousel-item w-full">
  <img src={carousel3} class="w-full" />
  </div>
</div> 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item1" class="btn btn-xs">1</a> 
  <a href="#item2" class="btn btn-xs">2</a> 
  <a href="#item3" class="btn btn-xs">3</a> 
  <a href="#item4" class="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Medium;