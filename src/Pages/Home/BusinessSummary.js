import React from 'react';
import clients from '../../assets/clients.png'
import reveneu from '../../assets/reveneu.png'
import feedback from '../../assets/feedback.png'
import tools from '../../assets/tools.png'

const BusinessSummary = () => {
    return (
        <div className='bs-sum bg-slate-900 py-20'>
            <h1 className='text-center fnt-os text-6xl font-bold mb-20 text-white'>Milions Buseness trus us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-20 gap-5">
                {/* 1 */}
                <div class="card rounded-none py-3 bg-base-100 ">
                    <div className='b-sum'>
                        <img  src={clients} alt=''></img>
                        <h1 className='fnt-os font-bold text-2xl'>1000+ Clients</h1>
                    </div>
                </div>
                {/* 2 */}
                <div class="card rounded-none py-3  bg-base-100 ">
                    <div className='b-sum'>
                        <img src={reveneu} alt=''></img>
                        <h1 className='fnt-os font-bold text-2xl'>200M+ Annual Reveneu</h1>
                    </div>
                </div>
                {/* 3 */}
                <div class="card rounded-none py-3  bg-base-100 ">
                    <div className='b-sum'>
                        <img src={feedback} alt=''></img>
                        <h1 className='fnt-os font-bold text-2xl'>20k+ Feedback</h1>
                    </div>
                </div>
                {/* 4 */}
                <div class="card rounded-none py-3  bg-base-100 ">
                    <div className='b-sum'>
                        <img src={tools} alt=''></img>
                        <h1 className='fnt-os font-bold text-2xl'>100+ Tools</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummary;