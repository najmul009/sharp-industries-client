import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200 px-5">
      <div class="hero-content flex-col lg:flex-row p-0">
        <img src={banner} class="lg:max-w-lg sm:max-w-sm   " alt='' />
        <div>
          <h1 class="text-5xl font-bold fnt-os">NEW PRODUCTS IN STOCKS</h1>
          <p class="py-6">New product or service that is leading or changing the industry and generating exceptional sales and earnings growth.</p>
          <Link to='products' class="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;