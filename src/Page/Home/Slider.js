import React from 'react';

const Slider = () => {
     return (
          <div className='py-12 lg:px-12 p-5'>
               <h1 className='text-5xl font-bold text-center py-12 text-primary'>Happy client says ...!</h1>
               <div class="carousel mx-auto">
                    <div id="item1" class="carousel-item mx-auto w-full">
                         <div className=' mx-auto md:w-3/4  lg:w-2/4'>
                              <div className='text-center '>
                                   <div className=''>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit ratione accusantium quod maxime soluta id Lorem, ipsum dolor sit amet consecteturvel, velit rem tempora .</p>
                                   </div>
                                   <div class="avatar online">
                                        <div class="w-32 mt-2 rounded-full">
                                             <img src="https://api.lorem.space/image/face?hash=64318" alt='' />
                                        </div>
                                   </div>
                                   <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>

                              </div>
                         </div>
                    </div>
                    <div id="item2" class="carousel-item h-60 w-full">
                         <div className=' mx-auto md:w-3/4  lg:w-2/4'>
                              <div className='text-center '>
                                   <div className=''>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit ratione accusantium quod maxime soluta id Lorem, ipsum dolor sit amet consecteturvel, velit rem tempora .</p>
                                   </div>
                                   <div class="avatar online">
                                        <div class="w-32 mt-2 rounded-full">
                                             <img src="https://api.lorem.space/image/face?hash=92048" />
                                        </div>
                                   </div>
                                   <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>

                              </div>
                         </div>
                    </div>
                    <div id="item3" class="carousel-item w-full">
                         <div className=' mx-auto md:w-3/4  lg:w-2/4'>
                              <div className='text-center '>
                                   <div className=''>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit ratione accusantium quod maxime soluta id Lorem, ipsum dolor sit amet consecteturvel, velit rem tempora .</p>
                                   </div>
                                   <div class="avatar online">
                                        <div class="w-32 mt-2 rounded-full">
                                             <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                                        </div>
                                   </div>
                                   <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>

                              </div>
                         </div>
                    </div>
                    <div id="item4" class="carousel-item w-full">
                         <div className=' mx-auto md:w-3/4 lg:w-2/4'>
                              <div className='text-center '>
                                   <div className=''>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit ratione accusantium quod maxime soluta id Lorem, ipsum dolor sit amet consecteturvel, velit rem tempora .</p>
                                   </div>
                                   <div class="avatar online">
                                        <div class="w-32 mt-2 rounded-full">
                                             <img src="https://api.lorem.space/image/face?hash=47449" />
                                        </div>
                                   </div>
                                   <h1 className='text-2xl font-bold'>Lorem, ipsum.</h1>

                              </div>
                         </div>
                    </div>
               </div>
               <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                    <a href="#item4" class="btn btn-xs">4</a>
               </div>
          </div>
     );
};

export default Slider;