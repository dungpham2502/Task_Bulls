import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import Navbar from './components/Navbar';
import { Service } from './pages/Service';
import { JobDetail } from './pages/JobDetail';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { AboutUs } from './pages/AboutUs';
import { Footer } from './components/Footer';
import { useUserContext } from './hooks/useUserContext';

function App() { 

  const { user } = useUserContext();
  
  return (
    <div className='container mx-auto px-20 py-6'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/detail' element={<JobDetail />} />
          <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
