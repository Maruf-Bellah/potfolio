import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import img from '../Shared/output-onlinegiftools (1).gif'

const Banner = () => {
     return (
          <div>
               <div className="banner lg:px-12 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <img className='w-5/6 md:w-4/6 lg:w-3/6 mx-auto' src={img} alt='' />
                         <div className='w-5/6 md:w-4/6 lg:w-3/6 '>
                              <h1 className="text-6xl  font-bold ">Hey ! I am </h1>
                              <div className='font-bold text-6xl pt-3 text-primary'>
                                   <Typed
                                        strings={[
                                             "Maruf Bellah ..",
                                        ]}
                                        typeSpeed={150}
                                        backSpeed={100}
                                        loop
                                   />
                              </div>
                              <p className="py-6">Hi I'm a new web developer, I like to learn new things, I always put myself in a job, all in all you can assume a hard worker man, as well as on duty and hoof care flower, so if you have any If you are looking for a junior web developer then you are at the right place</p>
                              <button className="btn ml-6 md:ml-0 mb-6 btn-primary">Get Started ➜</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;