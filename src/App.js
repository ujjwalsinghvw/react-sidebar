import './App.css';
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Sidebar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/contact' element={<Contact/>} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
