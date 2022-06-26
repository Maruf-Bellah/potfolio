import React, { useEffect, useState } from 'react';
import img1 from './img/tools.png';
import img2 from './img/doctor.png';
import img3 from './img/car.png';
import img4 from './img/student.png';
import img5 from './img/programer.png';
import img6 from './img/convertion.png';
import img7 from './img/nike.png';
import img8 from './img/penguin.png';
import img9 from './img/tSirt.png';

const AllProject = () => {
     const [projects, setProjects] = useState([]);

     useEffect(() => {
          fetch('project.json')
               .then(res => res.json())
               .then(data => setProjects(data))
     }, [])
     return (
          <div className='lg:px-12 py-12 p-5'>
               <h1 className='text-2xl font-bold text-center lg:text-5xl text-primary pb-10 uppercase '>Last my project ...! </h1>
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>


                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img1} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title uppercase">Hand Tools</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React, Node, MongoDb, Firebase</p>
                              <div className="card-actions justify-end">
                                   <a href="https://last-assainment.web.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img2} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Doctor-Portal</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React, Node, MongoDb, Firebase</p>
                              <div className="card-actions justify-end">
                                   <a href="https://doctors-portal-f6a0a.web.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img3} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Car-Web</h2>
                              <p>It is used,HTML,CSS, JS, Bootstrap, React, Node, MongoDb, Firebase</p>
                              <div className="card-actions justify-end">
                                   <a href="https://carweb-b913e.web.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img4} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Tutor</h2>
                              <p>IT is used,HTML, CSS , JS, Bootstrap, React js</p>
                              <div className="card-actions justify-end">
                                   <a href="https://assainment-3fdcb.web.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img5} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Programer</h2>
                              <p>IT is used,HTML, CSS , JS, Bootstrap, React js</p>
                              <div className="card-actions justify-end">
                                   <a href="https://scintillating-tiramisu-f8ae90.netlify.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img9} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">TShirt Mania</h2>
                              <p>It is used, HTML, SCC, JS</p>
                              <div className="card-actions justify-end">

                                   <a href="https://stirring-marzipan-95a441.netlify.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img7} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title uppercase">Nike</h2>
                              <p>It is used, only HTML , CSS, Bootstrap</p>
                              <div className="card-actions justify-end">
                                   <a href="https://glowing-truffle-8ccc94.netlify.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img8} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Penguin Fashion</h2>
                              <p>It is used, only HTML , CSS, Bootstrap</p>
                              <div className="card-actions justify-end">
                                   <a href="https://penguin-ayesha.netlify.app/" target='_blank' >

                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>
                    <div className="card card-compact  bg-base-100 shadow-xl">
                         <figure><img src={img6} alt="Shoes" /></figure>
                         <div className="card-body">
                              <h2 className="card-title">Ayesha Convention Center</h2>
                              <p>It is used, only HTML , CSS, Bootstrap</p>
                              <div className="card-actions justify-end">
                                   <a href="https://web-ayesha.netlify.app/" target='_blank' >
                                        <button className="btn btn-link">Lest Go to Website</button>
                                   </a>
                              </div>
                         </div>
                    </div>




               </div>
          </div>
     );
};

export default AllProject;