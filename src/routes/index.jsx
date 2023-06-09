import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from '../pages/Landingpage'
import Domain from '../pages/Domain'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Recovery from '../pages/Recovery'
import About from '../pages/About'
import Policies from '../pages/Policies'
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/domain" element={<Domain />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recovery-account" element={<Recovery />} />
        <Route path="/about" element={<About />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
