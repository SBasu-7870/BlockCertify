import React,{useState,useRef} from 'react'
import verify from '../utils/verifyCertificate';
import Navbar from '../components/Navbar';
import Tick from '../assets/Tick.svg'
import Cross from '../assets/Cross.svg'
import { CSSTransition } from "react-transition-group";

function VerifyCertificate() {
  const [certificateHash,setCertificateHash] = useState("");
  const [data,setData] = useState({});
  const [verified,setVerified] = useState(false);
  const [showDetails,setShowDetails] = useState(false);

  const nodeRef = useRef(null);

  const handleClick = async (event)=>{
      event.preventDefault();
      if(certificateHash){
        const certificateData = await verify(certificateHash);
      setData(certificateData.data);
      setVerified(certificateData.verified);
      setShowDetails(true);
      console.log(certificateData);
      }
      
  }

  const fadeStyles = {
    transition: "opacity 500ms ease-in",
    opacity: showDetails ? 1 : 0
  };

  return (
    <>
    <Navbar navHidden={true} buttonHidden={true}/>
    <h1 className='block text-3xl text-center mt-5'>Verify the Certificate</h1>
    <div className='flex flex-row items-center justify-center'>
    <div className='flex flex-col justify-center items-center my-4 ml-3 mr-2 w-1/3 h-auto lg:h-96 max-w-lg bg-noise border-solid border-2 border-black rounded-lg shadow-xl'>
       <h1 className='block text-2xl my-2 mx-auto'>Verify Your Certificate</h1>
       <p className='text-sm bold mb-4'>Please Enter Your Certificate ID</p>
       <hr className='block w-2/3 border-solid border border-black justify-center'/>
       <form className='m-2 p-1'>
         <label htmlFor="Auth" className='block text-sm text-gray-700 font-bold mb-2'>Enter your Certificate ID</label>
         <input value={certificateHash} onChange={e => setCertificateHash(e.target.value)} type="text" className='shadow appearance-none border border-b-2 border-gray-800 rounded-full w-full my-3 py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:border-b-4 hover:-translate-y-0.5 hover:scale-90 duration-300 focus:outline-none focus:shadow-outline'/>
         <button onClick={handleClick} className=' bg-neutral-900 hover:bg-neutral-800 text-white font-bold mt-5 py-2 px-4 border-b-4 border-l-2 border-gray-500 hover:border-gray-400 rounded-full'>
           verify
         </button>
       </form>
    </div>
    <CSSTransition 
     nodeRef={nodeRef}
     in={showDetails}
     timeout={500}
     style={fadeStyles}
     unmountOnExit
    >
     <div ref={nodeRef} className='flex flex-col items-center w-1/2 h-auto lg:h-96 bg-noise border-solid border-2 border-black rounded-lg shadow-xl'>
      <h1 className='block text-2xl mt-2'>Your Certificate Details are:</h1>
      <div className='flex items-start mt-3 pl-5 py-2 w-full'>
      <ul className='list-none'>
        <li className='text-xl my-2'>Issued By: {data.org}</li>
        <li className='text-xl my-2'>Issued to: {data.name}</li>
        <li className='text-xl my-2'>Issued For: {data.issuefor}</li>
        <li className='text-xl my-2'>Date of Issue: {data.issueDate}</li>
        <li className='text-xl my-2'>Expiry Date: {data.expiryDate}</li>
        <li className='text-xl my-2'>Verification Status: {verified?"Verified":"Not verified"} {verified?<img className='ml-5' src={Tick} style={{height:50, width:50}}/>:<img className='ml-5' src={Cross} style={{height:50, width:50}}/>}</li>
      </ul>
      </div>
    </div>
    </CSSTransition>
    
    </div>
    </>
  )
}

export default VerifyCertificate