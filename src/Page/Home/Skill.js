import React from 'react';
import html from './html.webp';
import css from './css.png';
import js from './js.png';
import bootstrap from './boostrap.png';
import tailwind from './tailwind.jpg';
import react from './react.png';
import node from './node.png';
import mongoDB from './mongodb.png';

const Skill = () => {
     return (
          <div className='py-12 lg:px-12 p-5'>
               <h1 className='text-5xl font-bold text-center text-primary pb-8'>This is my skill...!</h1>
               <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    <div className='text-center hover:shadow-xl rounded-xl shadow'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={html} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>HTML</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={css} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>CSS</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={js} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>javascript</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={bootstrap} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Bootstrap</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={tailwind} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Tailwind</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-24 rounded-full">
                                   <img src={react} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>React</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar ">
                              <div class="w-20 rounded-full">
                                   <img src={node} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>Node</h2>
                    </div>
                    <div className='text-center hover:shadow-xl shadow rounded-xl'>
                         <div class="avatar">
                              <div class="w-24 rounded-full">
                                   <img src={mongoDB} alt='' />
                              </div>
                         </div>
                         <h2 className='text-2xl font-bold py-3'>MongoDB</h2>
                    </div>
               </div>
          </div>
     );
};

export default Skill;