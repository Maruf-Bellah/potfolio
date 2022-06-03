import React from 'react';
import img from './me2.jpeg';

const AboutMe = () => {
     return (
          <div className='py-12 lg:px-12 p-5'>
               <div class="hero bg-base-100">
                    <div class="hero-content flex-col lg:flex-row">
                         <img className='w-6/6 md:w-5/6 lg:w-3/6' src={img} alt='' />
                         <div>
                              <h1 class="text-5xl font-bold text-primary">About me ...!</h1>
                              <p class="py-6 text-justify text-inherit">Provident Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci delectus nemo minus pariatur, deserunt doloribus incidunt quo sunt, a in perspiciatis necessitatibus iusto illum eius, nobis reprehenderit inventore? Temporibus minima nemo deleniti fugiat exercitationem assumenda totam sunt esse ea eos neque molestias asperiores, quo consequatur labore. Facilis quasi officia sunt a aliquam ex quo assumenda quasi. cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              <button class="btn btn-primary">Get Started ➜</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutMe;