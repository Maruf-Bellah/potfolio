import React from 'react';
import img from './me2.jpeg';

const AboutMe = () => {
     return (
          <div id='about' className='py-12 lg:px-12 p-5'>
               <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                         <img className='w-6/6 md:w-5/6 lg:w-3/6' src={img} alt='' />
                         <div>
                              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary uppercase">About me ...!</h1>
                              <p className='pt-5'>Hi, This is Maruf bellah</p>
                              <p className="py-6 text-justify text-inherit">A junior web developer. I like to focus on coding and learning new techniques, I'm currently studying science, and I did a course from where I learned a lot, I will learn a lot more in the future inshallah, if you want you can try it once I'm ready for, I want to satisfy you because it is my duty, so if you have any questions about this you can ask me free mind no problem. And last but not least I like coding, that's why I do it.</p>
                              <button className="btn btn-secondary">Get Started ➜</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutMe;