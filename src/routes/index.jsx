import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from '../pages/Landingpage'
import Domain from '../pages/Domain'
const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/domain" element={<Domain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoutes
