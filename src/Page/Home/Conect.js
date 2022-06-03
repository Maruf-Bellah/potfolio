import React from 'react';
import word from './word2.gif'

const Conect = () => {
     return (
          <div className='lg:px-12 py-12'>
               <h1 className='text-5xl text-center text-primary font-bold'>Have you any question ..?</h1>
               <div class="hero ">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                         <img src={word} class="w-6/6 " />
                         <div>

                              <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi</p>

                              <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                                   <input type="checkbox" class="peer" />
                                   <div class="collapse-title text-xl font-medium">
                                        Focus me to see content
                                   </div>
                                   <div class="collapse-content">
                                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                   </div>
                              </div>

                              <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                                   <input type="checkbox" class="peer" />
                                   <div class="collapse-title text-xl font-medium">
                                        Focus me to see content
                                   </div>
                                   <div class="collapse-content">
                                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                   </div>
                              </div>

                              <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                                   <input type="checkbox" class="peer" />
                                   <div class="collapse-title text-xl font-medium">
                                        Focus me to see content
                                   </div>
                                   <div class="collapse-content">
                                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                   </div>
                              </div>

                              <div tabindex="0" class="collapse mb-3 collapse-plus border border-base-300 bg-base-100 rounded-box">
                                   <input type="checkbox" class="peer" />
                                   <div class="collapse-title text-xl font-medium">
                                        Focus me to see content
                                   </div>
                                   <div class="collapse-content">
                                        <p>tabindex="0" attribute is necessary to make the div focusable</p>
                                   </div>
                              </div>
                              <button class="btn mt-3 btn-primary">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Conect;