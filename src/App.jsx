import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import CertificateForm from './pages/CertificateForm'
import VerifyCertificate from './pages/VerifyCertificate'
import GetStarted from './pages/GetStarted'
import LandingLazy from './components/LandingLazy'


function App() {


  return (
    <Routes>
      <Route path="/" element={<LandingLazy/>}/>
      <Route path="/getStarted" element={<GetStarted/>}/>
      <Route path="/issueCertificate" element={<CertificateForm/>}/>
      <Route path="/verifyCertificate" element={<VerifyCertificate/>}/>
    </Routes>
  )
}

export default App
