import React,{useState} from 'react'
import verify from '../utils/verifyCertificate';

function VerifyCertificate() {
  const [certificateHash,setCertificateHash] = useState("");
  const [data,setData] = useState({});

  const handleClick = async (event)=>{
      event.preventDefault();
      const certificateData = await verify(certificateHash);
      setData(certificateData.data);
  }

  return (
    <>
    <h1 className='block text-3xl text-center mt-5'>Verify the Certificate</h1>
    <div className='flex flex-row items-center justify-center'>
    <div className='flex flex-col justify-center items-center my-4 ml-3 mr-2 w-1/3 h-96 max-w-lg border-solid border-2 border-black rounded-lg shadow-xl'>
       <h1 className='block text-2xl my-2 mx-auto'>Verify Your Certificate</h1>
       <p className='text-sm bold mb-4'>You may choose one of the two methods to verify</p>
       <hr className='block w-2/3 border-solid border border-black justify-center'/>
       <form className='m-2 p-1'>
         <label htmlFor="Auth" className='block text-sm text-gray-700 font-bold mb-2'>Enter your Certificate ID</label>
         <input value={certificateHash} onChange={e => setCertificateHash(e.target.value)} type="text" className='shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:shadow-outline'/>
         <button onClick={handleClick} className=' bg-neutral-900 hover:bg-neutral-800 text-white font-bold mt-5 py-2 px-4 border-b-4 border-l-2 border-gray-700 hover:border-gray-500 rounded'>
           verify
         </button>
       </form>
    </div>
    <div className='flex flex-col items-center w-1/2 h-96 border-solid border-2 border-black rounded-lg shadow-xl'>
      <h1 className='block text-2xl mt-2'>Your Certificate Details are:</h1>
      <div className='flex items-start mt-3 pl-5 py-2 w-full'>
      <ul className='list-none'>
        <li className='text-xl my-2'>Issued By: {data.org}</li>
        <li className='text-xl my-2'>Issued to: {data.name}</li>
        <li className='text-xl my-2'>Issued For: {data.issuefor}</li>
        <li className='text-xl my-2'>Date of Issue: {data.issueDate}</li>
        <li className='text-xl my-2'>Expiry Date: {data.expiryDate}</li>
        <li className='text-xl my-2'>Verification Status: none</li>
      </ul>
      </div>
    </div>
    </div>
    </>
  )
}

export default VerifyCertificate