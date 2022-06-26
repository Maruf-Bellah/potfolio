import React from 'react';
import programer from './Programming.gif';
import cicle from './Circles.gif';
import location from './Location tracking.gif';

const Service = () => {
     return (
          <div className='py-16 lg:px-12 p-5'>
               <div className='grid lg:font-medium md:grid-cols-2 justify-center lg:grid-cols-3 gap-20'>
                    <div className='text-center '>
                         <div className="avatar mb-5">
                              <div className="w-24  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img className='' src={programer} alt='' />
                              </div>
                         </div>
                         <p>From simple to complex. Inshallah I will make that website. Host, and the site will be updated for you. Don't get tense</p>
                         <h5 className='font-bold  text-2xl'>Developer</h5>
                    </div>
                    <div className='text-center'>
                         <div className="avatar mb-5">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src={cicle} alt='' />
                              </div>
                         </div>
                         <p>modern web design is more involved than creating and attractive website . consolidation of user experience</p>
                         <h5 className='font-bold  text-2xl'>Design</h5>
                    </div>
                    <div className='text-center'>
                         <div className="avatar mb-5">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src={location} alt='' />
                              </div>
                         </div>
                         <p>Users will be quite satisfied with the design and use, and your website will be made attractive, and you will be satisfied.</p>
                         <h5 className='font-bold text-2xl'>Ui/Us</h5>
                    </div>
               </div>

          </div>
     );
};

export default Service;