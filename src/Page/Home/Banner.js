import React from 'react';
import './Banner.css';
import img from '../Shared/output-onlinegiftools (1).gif'

const Banner = () => {
     return (
          <div>
               <div className="banner lg:px-12 ">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <img className='w-5/6 md:w-4/6 lg:w-3/6 mx-auto' src={img} alt='' />
                         <div className='w-5/6 md:w-4/6 lg:w-3/6 '>
                              <h1 className="text-5xl  font-bold ">Hey ! I am </h1>
                              <h1 className="text-5xl font-bold pt-2 text-primary">Maruf Bellah ...
                              </h1>
                              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, qui. ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              <button className="btn ml-6 md:ml-0 mb-6 btn-primary">Get Started ➜</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;