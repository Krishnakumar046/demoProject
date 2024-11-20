import React from 'react'
import UseState from './component/UseState'
import Navbar from './component/Navbar'
import CardProduct from './component/CardProduct'
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<UseState />} />
          <Route path="/card" element={<CardProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App