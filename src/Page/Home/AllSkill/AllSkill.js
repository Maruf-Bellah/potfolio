import React from 'react';
import img1 from './img/html.webp';
import img2 from './img/css.png';
import img3 from './img/js.png';
import img4 from './img/boostrap.png';
import img5 from './img/tailwind.jpg';
import img6 from './img/react.png';
import img7 from './img/reactBootstrap.Default';
import img8 from './img/react-spring.jpg';
import img9 from './img/node.png';
import img10 from './img/expressjs.jpg';
import img11 from './img/mongodb.png';
import img12 from './img/firebase.png';
import img13 from './img/heroku.png';
import img14 from './img/git.png';
import img15 from './img/figma.jpg';
import img16 from './img/netlyfy.jpg';




const AllSkill = () => {
     return (
          <div className='lg:px-12 py-12 p-5'>
               <h1 className='text-2xl text-center text-primary lg:text-5xl font-bold uppercase pb-10'>These are my skill set ....!</h1>
               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img1} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>HTML</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img2} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>CSS</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img4} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Bootstrap</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img5} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Tailwind</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img6} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>React</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img3} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Javascript</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img7} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>React-Bootstrap</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img8} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>React-Spring</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img9} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Node.js</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img10} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>ExpressJs</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img11} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>MongoDB</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img12} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Firebase</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img13} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Heroku</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img14} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Git</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img15} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Figma</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div className="avatar">
                              <div className="w-24 rounded-full">
                                   <img src={img16} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Netlyfy</h2>
                    </div>

               </div>
          </div>
     );
};

export default AllSkill;