import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import About from './pages/About'; // Import the About component
import Shop from './pages/Shop'; // Import the Shop component
import Footer from './components/footer';

export default function App() {
  return(
    <>
    <div>
    <Navbar />
    </div>
      <div className='WholeSite'>
       
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

