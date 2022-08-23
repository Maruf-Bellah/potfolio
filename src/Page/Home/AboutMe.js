import React from 'react';
import { Link } from 'react-router-dom';
import img from './me2.jpeg';

const AboutMe = () => {
     return (
          <div id='about' className='py-6 lg:px-12 '>
               <div className="hero bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                         <img className='w-6/6 md:w-5/6 lg:w-5/12 ' src={img} alt='' />
                         <div className='lg:font-medium lg-1s/6'>
                              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary uppercase">About me ...!</h1>
                              <p className='pt-5'>Hey, I am Maruf bellah</p>
                              <p className="py-6 text-justify text-inherit">A junior web developer. I like to focus on coding and learning new techniques, I'm currently studying science, and I did a course from where I learned a lot, I will learn a lot more in the future inshallah, if you want you can try it once I'm ready for, I want to satisfy you because it is my duty, so if you have any questions about this you can ask me free mind no problem. And last but not least I like coding, that's why I do it.</p>
                              <Link to='/about'>
                                   <button className="btn font-bold btn-secondary">Read More ➜</button>
                              </Link>
                              <a href='https://drive.google.com/file/d/1JmcizTC49r_05sOBrcCa8JMZ-ynnlksp/view?usp=sharing' target='_blank'>
                                   <button className="btn ml-3 font-bold btn-secondary"> Certificate ➜</button>
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutMe;