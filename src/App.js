import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home';
import About from './Page/Home/About';
import AllWebsite from './Page/Home/AllWebsite';
import Navber from './Page/Shared/Navber';
import Footer from './Page/Shared/Footer';

function App() {
  return (
    <div className="mx-auto max-w-screen-xl ">
      <Navber></Navber>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/allWebsite' element={<AllWebsite></AllWebsite>}></Route>
      </Routes>
    </div>
  );
}

export default App;
