import React, { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom"
import Landing from './pages/Landing'
import CertificateForm from './pages/CertificateForm'
import VerifyCertificate from './pages/VerifyCertificate'
import GetStarted from './pages/GetStarted'
import LoadingScreen from './components/LoadingScreen'


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }


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
