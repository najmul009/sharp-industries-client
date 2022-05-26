import React from 'react';
import Alibaba from '../../assets/logos/Alibaba.svg'
import Amazon from '../../assets/logos/Amazon.svg'
import Daraz from '../../assets/logos/Daraz.svg'
import Ebay from '../../assets/logos/Ebay.svg'
import Rakuten from '../../assets/logos/Rakuten.svg'
import Target from '../../assets/logos/Target.svg'
import Walmart from '../../assets/logos/Walmart.svg'

const Brands = () => {
    return (
        <div>
            <h1 className='text-center text-4xl fnt-os font-bold my-10'>Brands We Work With</h1>
            <div className='brands'>
            <img src={Alibaba} alt=""/>
               <img src={Amazon} alt=""/>
               <img src={Daraz} alt=""/>
               <img src={Ebay} alt=""/>
               <img src={Rakuten} alt=""/>
               <img src={Target} alt=""/>
               <img src={Walmart} alt=""/> 
            </div>
        </div>
    );
};

export default Brands;