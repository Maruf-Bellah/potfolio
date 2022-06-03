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
          <div className=''>

               <Banner></Banner>
               <Service></Service>
               <AboutMe></AboutMe>
               <Skill></Skill>
               <Conect></Conect>
               <Project></Project>
               <Slider></Slider>
               <Footer></Footer>

          </div>
     );
};

export default Home;