import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'
import CertificateForm from './pages/CertificateForm'
import VerifyCertificate from './pages/VerifyCertificate'
import GetStarted from './pages/GetStarted'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/getStarted" element={<GetStarted/>}/>
      <Route path="/issueCertificate" element={<CertificateForm/>}/>
      <Route path="/verifyCertificate" element={<VerifyCertificate/>}/>
    </Routes>
  )
}

export default App
