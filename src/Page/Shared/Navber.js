import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
     const menuItem = <>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='allProject'>Projects</Link></li>
          <li><Link to='/allSkill'>All Skill</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/about'>About</Link></li>
     </>

     return (
          <div className='' style={{
               backgrundColor: `'#F4FEFF'`
          }}>
               <div className="navbar lg:px-0 bg-primary text-white font-bolder justify-between">
                    <div className="navbar-start">

                         <p className="btn btn-ghost normal-case font-bold text-2xl"><Link to='/'>Portfolio</Link></p>

                    </div>
                    <div className="navbar-end hidden lg:flex">
                         <ul className="menu menu-horizontal font-bold p-0">
                              {menuItem}
                         </ul>



                    </div>
                    <div className="dropdown dropdown-end">
                         <label tabIndex="0" className="btn btn-ghost  lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block text-white w-10 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                         </label>
                         <ul tabIndex="0" className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 font-bold text-black  rounded-box w-52">
                              {menuItem}
                         </ul>
                    </div>

               </div>
          </div>
     );
};

export default Navber;