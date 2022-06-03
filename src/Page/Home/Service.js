import React from 'react';

const Service = () => {
     return (
          <div className='py-12 lg:px-12 p-5'>
               <div className='grid  md:grid-cols-2 justify-center lg:grid-cols-3 gap-10'>
                    <div className='text-center'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img className='' src="https://api.lorem.space/image/face?hash=3174" alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum Lorem, ipsum. dolor sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold'>Lorem, ipsum.</h5>
                    </div>
                    <div className='text-center'>
                         <div class="avatar">
                              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum dolor Lorem, ipsum. sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold'>Lorem, ipsum.</h5>
                    </div>
                    <div className='text-center'>
                         <div class="avatar">
                              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                   <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                              </div>
                         </div>
                         <p>Lorem ipsum, dolor sit amet </p>
                         <p>Lorem ipsum dolor Lorem, ipsum. sit amet consectetur adipisicing.</p>
                         <h5 className='font-bold'>Lorem, ipsum.</h5>
                    </div>
               </div>

          </div>
     );
};

export default Service;