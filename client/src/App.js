import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/home';
import Login from './components/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NavigationBar from './components/navbar'
import Homepage from './components/homepage'
import Footer from './components/footer'

export default function App() {
  return(
    <>
      <div>
        <Router>
          <div>
            <NavigationBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

