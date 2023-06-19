import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Records from './pages/Records'
import Navbar from './components/Navbar'
import React from 'react'
import LoginAlt from './pages/LoginAlt'
import RegisterAlt from './pages/RegisterAlt'
import { Flex } from '@chakra-ui/react'
import Hero from './pages/Hero'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/alt' element={<Hero />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loginalt' element={<LoginAlt />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/registeralt' element={<RegisterAlt />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/records' element={<Records />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
