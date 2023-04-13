import React from 'react'
import LoginComponent from '../components/LoginComponent'
import GradudateCap from '../assets/GraduateCap.svg'
import CertificateLogo from '../assets/CertificateLogo.svg'
import Navbar from '../components/Navbar'

function GetStarted() {
  const verifyOptions = ["Check the certificate validity","Verify the certificate authenticity","Look up the certificate details"]
  const certifyOptions = ["Issue a Certificate","Preview the certificate","Send the certificate via email"]
  const navHidden = true;
  return (
    <>
    <Navbar navHidden={navHidden} buttonHidden={true}/>
    <div className='flex flex-col lg:flex-row justify-center items-center mt-10'>
      <LoginComponent title={"Verify Certificate"} description={"Enter to verify the authenticity and validity of the certificate"} svgr={GradudateCap} content={verifyOptions} path="/verifyCertificate"/>
      <LoginComponent title={"Issue Certificate"} description={"Enter to issue a cetificate to a candidate"} svgr={CertificateLogo} content={certifyOptions} path="/issueCertificate"/>
    </div>
    </>
  )
}

export default GetStarted