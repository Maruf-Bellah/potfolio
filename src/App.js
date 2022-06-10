import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/Home/About';
import Navber from './Page/Shared/Navber';
import AllProject from './Page/Home/Project/AllProject';
import AllSkill from './Page/Home/AllSkill/AllSkill';
import HandTool from './Page/Home/HandTool/HandTool';
import Car from './Page/Home/Car/Car';
import Tutor from './Page/Home/Tutor/Tutor';
import Blog from './Page/Home/Blog';

function App() {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/allProject' element={<AllProject></AllProject>}></Route>
        <Route path='/allSkill' element={<AllSkill></AllSkill>}></Route>
        <Route path='/handTools' element={<HandTool></HandTool>}></Route>
        <Route path='/car' element={<Car></Car>}></Route>
        <Route path='/tutor' element={<Tutor></Tutor>}></Route>
      </Routes>
    </div>
  );
}

export default App;
