import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Card from './Component/Card'
import CardDetails from './Component/CardDetails'

function App() {
  return(
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Card />}/>
        <Route path='/cardDetails/:id' element={<CardDetails />}/>
      </Routes>
    </div>
  )
}

export default App
