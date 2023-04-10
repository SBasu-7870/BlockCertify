import React from "react";
import LoginComponent from "../components/LoginComponent";
import CertificateForm from "./CertificateForm";
import VerifyCertificate from "./VerifyCertificate";

function Landing() {
  return (
    // <div className="flex flex-row justify-center items-center mt-10 pt-5">
    //   <LoginComponent title={"Verify"} description={"Login to verify your certificate"}/>
    //   <LoginComponent title={"Issue"} description={"Login to issue a certificate"}/>
    // </div>
    // <CertificateForm/>
    <VerifyCertificate/>
  );
}

export default Landing;
