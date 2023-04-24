import React,{useRef} from "react";
import Navbar from "../components/Navbar";
import Certification from "../assets/Certification.svg"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


function Landing() {
  const worksRef = useRef(null);


  const handleHowClick = () =>{
    window.scrollTo({
      top: worksRef.current.offsetTop,
      behavior: "smooth"
    });
  }
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <Navbar handleHowClick={handleHowClick}/>
      <div className="flex flex-wrap flex-col mt-4 px-6 mx-6 text-center">
        <h1 className="text-7xl font-bold"><span className="text-shadow-gray">Certify, Verify and </span><br/>
        <span className="text-border-black text-shadow-black text-gray-50">authenticate</span> <span className="text-shadow-gray">with ease</span>
        </h1>
        <p className="mt-4 text-xl text-gray-700 py-2">Protect your credentials with the security of blockchain technology using BlockVerify.</p>
        <img className="hidden md:block" src={Certification} alt="certificate" style={{height:700, width:800}}/>
        {/* <a href="https://storyset.com/people">People illustrations by Storyset</a> */}
      </div>
    </div>
    <div ref={worksRef} className="flex flex-col justify-center items-center w-full bg-black text-white py-4">
       <h1 className="text-5xl font-mono mt-4">How it works?</h1>
       <p className="text-xl font-mono mt-10 mx-2 px-10">
         BlockCertify is a blockchain based certificate issue and verification app which aims to use the strengths of blockchain technology to authenticate certificates to remove forgery and ensure integrity.
         <br/>
         Users can either login as an organisation which issues certificates or can login to simply verify the status of the certificate in question.
         <br/><br/>
         It is built on top of the Polygon network which is a sidechain of Ethereum blockchain network. It is a layer 2 scaling solution which works on the PoS (Proof of Stake) consensus algorithm which is capable of processing upto 65000 transactions per second.
         <br/><br/>
         Certificates generated with BlockCertify come with a unique ID which is used to identify the certificate on the blockchain. This unique ID may be provided during verification to ensure the authenticity of the certificate.
         <br/>
         The issued certificates can be downloaded and/or sent to the email of the issued individual.
         <br/><br/>
         Click on <Link to="/getStarted">Get Started</Link> to start your journey with BlockCertify.
       </p>
    </div>
    <Footer/>
    </>
  );
}

export default Landing;
