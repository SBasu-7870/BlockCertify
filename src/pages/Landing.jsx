import React from "react";
import Navbar from "../components/Navbar";
// import LoginComponent from "../components/LoginComponent";
// import CertificateForm from "./CertificateForm";
// import VerifyCertificate from "./VerifyCertificate";

function Landing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar/>
      <div className="flex flex-wrap mt-4 px-6 mx-6 text-center">
        <h1 className="text-7xl font-bold">Certify, Verify and <br/>
        <span className="text-border-black text-shadow-black text-gray-50">authenticate</span> with ease
        </h1>
      </div>
    </div>
  );
}

export default Landing;
