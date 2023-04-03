import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'
import Certificate from './components/Certificate'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/issue" element={<Certificate/>}/>
    </Routes>
  )
}

export default App
