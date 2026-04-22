import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Bollywood from './components/Bollywood'
import Fitness from './components/Fitness'
import Food from './components/Food'
import Hollywood from './components/Hollywood'
import Home from './components/Home'
import Technology from './components/Technology'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bollywood' element={<Bollywood />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/hollywood' element={<Hollywood />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/food' element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

