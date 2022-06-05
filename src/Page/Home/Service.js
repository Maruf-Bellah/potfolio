import React from 'react';
import programer from './Programming.gif';
import cicle from './Circles.gif';
import location from './Location tracking.gif';

const Service = () => {
     return (
          <div className='py-12 lg:px-12 p-5'>
               <div className='grid  md:grid-cols-2 justify-center lg:grid-cols-3 gap-10'>
                    <div className='text-center'>
                         <div className="avatar ">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img className='' src={programer} alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum Lorem, ipsum. dolor sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold  text-2xl'>Developer</h5>
                    </div>
                    <div className='text-center'>
                         <div className="avatar">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src={cicle} alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum dolor Lorem, ipsum. sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold  text-2xl'>Design</h5>
                    </div>
                    <div className='text-center'>
                         <div className="avatar">
                              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src={location} alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum dolor Lorem, ipsum. sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold text-2xl'>Ui/Us</h5>
                    </div>
               </div>

          </div>
     );
};

export default Service;