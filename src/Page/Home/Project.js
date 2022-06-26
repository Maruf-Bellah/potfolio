import React from 'react';
import tools from './Project/img/tools.png';
import student from './student.png';
import car from './car.png';
import { Link } from 'react-router-dom';

const Project = () => {
     return (
          <div id='project' className='lg:px-12 p-5'>
               <h1 className='text-center font-bold text-primary text-3xl md:text-4xl lg:text-5xl uppercase   my-10'>This is my project...!</h1>
               <div className='grid lg:font-medium md:grid-cols-2 lg:grid-cols-3 gap-12'>
                    <div className="card  bg-base-100 shadow-xl">
                         <figure><img src={tools} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">HAND TOOL</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React, Node, MongoDb, Firebase</p>
                              <div className="card-actions justify-end">

                                   <Link to='/handTools'>
                                        <button className='btn font-bold btn-link'>Go To Details</button>
                                   </Link>

                              </div>
                         </div>
                    </div>

                    <div className="card bg-base-100 shadow-xl">
                         <figure><img className='hover:inset-02' src={car} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Car-Web</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React, Node, MongoDb, Firebase</p>
                              <div className="card-actions justify-end">
                                   <Link to='/car'>
                                        <button className='btn font-bold btn-link'>Go To Details</button>
                                   </Link>
                              </div>
                         </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                         <figure><img src={student} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Tutor</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React</p>
                              <div className="card-actions justify-end">
                                   <Link to='/tutor'>
                                        <button className='btn font-bold btn-link'>Go To Details</button>
                                   </Link>

                              </div>
                         </div>
                    </div>
               </div>
               <p className='text-right text-2xl p-3 hover:underline font-bold'>
                    <Link to='/allProject'>
                         <button className='btn btn-secondary justify-end'>see more project</button>
                    </Link>
               </p>
          </div >
     );
};

export default Project;