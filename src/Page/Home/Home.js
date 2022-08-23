import React from 'react';
import Footer from '../Shared/Footer';
import Navber from '../Shared/Navber';
import AboutMe from './AboutMe';
import Banner from './Banner';
import Conect from './Conect';
import Project from './Project';
import Service from './Service';
import Skill from './Skill';
import Slider from './Slider';

const Home = () => {
     return (
          <div className='mx-auto'>

               <Banner></Banner>
               <Service></Service>
               <AboutMe></AboutMe>
               <Skill></Skill>
               <Project></Project>
               <Conect></Conect>
               <Slider></Slider>
               <Footer></Footer>

          </div>
     );
};

export default Home;