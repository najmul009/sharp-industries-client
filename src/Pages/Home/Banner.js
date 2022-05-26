import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png'
const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 px-5">
      <div className="hero-content flex-col lg:flex-row p-0">
        <img src={banner} className="lg:max-w-lg sm:max-w-sm   " alt='' />
        <div>
          <h1 className="text-5xl font-bold fnt-os">NEW PRODUCTS IN STOCKS</h1>
          <p className="py-6">New product or service that is leading or changing the industry and generating exceptional sales and earnings growth.</p>
          <Link to='products' className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;