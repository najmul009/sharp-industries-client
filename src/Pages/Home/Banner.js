import React from 'react';
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200 ">
  <div class="hero-content flex-col lg:flex-row p-0">
    <img src={banner} class="lg:max-w-lg sm:max-w-sm   " alt=''/>
    <div>
      <h1 class="text-5xl font-bold fnt-os">NEW PRODUCTS IN STOCKS</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
  );
};

export default Banner;