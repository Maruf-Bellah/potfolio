import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
     const menuItem = <>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/allWebsite'>AllWebsite</Link></li>
     </>

     return (
          <div className='' style={{
               backgrundColor: `'#F4FEFF'`
          }}>
               <div className="navbar lg:px-12 bg-secondary justify-between">
                    <div className="navbar-start">

                         <p className="btn btn-ghost normal-case text-xl"><Link to='/'>potfolio</Link></p>

                    </div>
                    <div className="navbar-end hidden lg:flex">
                         <ul className="menu menu-horizontal p-0">
                              {menuItem}
                         </ul>



                    </div>
                    <div className="dropdown dropdown-end">
                         <label tabIndex="0" className="btn btn-link lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                         </label>
                         <ul tabIndex="0" className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              {menuItem}
                         </ul>
                    </div>

               </div>
          </div>
     );
};

export default Navber;