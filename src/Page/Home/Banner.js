import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import img from '../Home/1622956215261.png'

const Banner = () => {
     return (
          <div>
               <div className="banner lg:px-12 text-white p-5">
                    <div className="hero-content flex-col-reverse md:flex-col-reverse lg:flex-row-reverse">
                         <img className='w-6/6 md:w-4/6 lg:w-3/6 mx-auto m-10' src={img} alt='' />
                         <div className='w-6/6 md:w-4/6 lg:w-3/6 mb-10'>
                              <h1 className="text-4xl md:text-6xl lg:text-6xl  font-bold  uppercase">Hey ! I am </h1>
                              <h1 className="text-4xl lg:mt-2 md:text-6xl lg:text-6xl font-bold uppercase ">Maruf Bellah </h1>

                              <div className='mt-3 uppercase text-secondary text-2xl lg:text-3xl font-bold'>
                                   <Typed
                                        strings={[
                                             "And I am Web Designer",
                                             "And I am Web Developer",


                                        ]}
                                        typeSpeed={150}
                                        backSpeed={100}
                                        loop
                                   />
                              </div>
                              <p className="py-6 text-white lg:font-medium text-justify">Hi I'm a new web developer, I like to learn new things, I always put myself in a job, all in all you can assume a hard worker man, as well as on duty and hoof care flower, so if you have any If you are looking for a junior web developer then you are at the right place</p>

                              <a href="https://drive.google.com/file/d/1v7i5Y0M_CKpssUveEy1umLvqIzdOD_TV/view" target='_blank' >

                                   <button className="btn mt-5 md:mt-5 lg:mt-5  mb-6 btn-secondary font-bold text-primary">see my resume</button>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;