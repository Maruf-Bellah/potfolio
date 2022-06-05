import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/Home/About';
import Navber from './Page/Shared/Navber';
import AllProject from './Page/Home/Project/AllProject';
import AllSkill from './Page/Home/AllSkill/AllSkill';

function App() {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/allProject' element={<AllProject></AllProject>}></Route>
        <Route path='/allSkill' element={<AllSkill></AllSkill>}></Route>
      </Routes>
    </div>
  );
}

export default App;
