import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
    </Routes>
  )
}

export default App
