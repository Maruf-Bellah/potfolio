import React from 'react';
import programer from './programer.png';
import student from './student.png';
import car from './car.png';
import { Link } from 'react-router-dom';

const Project = () => {
     return (
          <div className='lg:px-12 p-5'>
               <h1 className='text-center font-bold text-primary text-5xl my-10'>This is my project..!</h1>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div class="card  bg-base-100 shadow-xl">
                         <figure><img src={programer} alt="Shoes" /></figure>
                         <div class="card-body">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div class="card-actions justify-end">

                                   <a href="https://scintillating-tiramisu-f8ae90.netlify.app/" target='_blank' >

                                        <button class="btn btn-link">Lest Go to Website</button>
                                   </a>

                              </div>
                         </div>
                    </div>
                    <div class="card  bg-base-100 shadow-xl">
                         <figure><img src={student} alt="Shoes" /></figure>
                         <div class="card-body">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div class="card-actions justify-end">
                                   <a href="https://assainment-3fdcb.web.app/" target='_blank' >

                                        <button class="btn btn-link">Lest Go to Website</button>
                                   </a>

                              </div>
                         </div>
                    </div>
                    <div class="card bg-base-100 shadow-xl">
                         <figure><img src={car} alt="Shoes" /></figure>
                         <div class="card-body">
                              <h2 class="card-title">Shoes!</h2>
                              <p>If a dog chews shoes whose shoes does he choose?</p>
                              <div class="card-actions justify-end">
                                   <a href="https://carweb-b913e.web.app/" target='_blank' >

                                        <button class="btn btn-link">Lest Go to Website</button>
                                   </a>

                              </div>
                         </div>
                    </div>
               </div>
          </div >
     );
};

export default Project;