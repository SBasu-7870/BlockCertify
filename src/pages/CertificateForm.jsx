import React,{useState} from 'react'
import Certificate from '../components/Certificate';
import addLeaf from '../utils/addLeaf.js';
import Navbar from '../components/Navbar'

function CertificateForm() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [org,setOrg] = useState("")
    const [issuefor,setIssueFor] = useState("")
    const [issueDate,setIssueDate] = useState('')
    const [expiryDate,setExpiryDare] = useState('');
    const [email,setEmail] = useState("");
    const [hash,setHash] = useState(undefined);

    const handleClick = async ()=> {
        const name = firstName +" "+ lastName;
        const data = {name,issuefor,org,issueDate,expiryDate,email};
        const newhash = await addLeaf(data);
        setHash(newhash);
    }

    return (
        <>
        <Navbar navHidden={true} buttonHidden={true}/>
        <h1 className='text-2xl font-mono text-center  w-full'>Enter the Certificate details</h1>
        <div className='flex flex-col items-center lg:flex-row'>
            <div className='flex flex-wrap items-center w-2/3 lg:w-1/3 pt-4 ml-4  mb-4 rounded-2xl border-2 border-black'>
                <div className='="w-full md:w-1/2 px-6 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="firstname">
                        First Name
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="firstname" type="text" placeholder='John' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Last Name
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="lastname" type="text" placeholder='Doe' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </div>
                <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Organization
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="organisation" type="text" placeholder='IEM' value={org} onChange={(e)=> setOrg(e.target.value)}/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Certified For*
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="certify" type="text" placeholder='' value={issuefor} onChange={(e)=> setIssueFor(e.target.value)}/>
                </div>
                <div className="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Date of Issue
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="issue" type="date" placeholder='dd-mm-yyyy' value={issueDate} onChange={(e)=> setIssueDate(e.target.value)}/>
                </div>
                <div className="w-full md:w-1/2 px-3">
                <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Valid Till
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="valid" type="date" placeholder='dd-mm-yyy' value={expiryDate} onChange={(e)=> setExpiryDare(e.target.value)}/>
                </div>
                <div className="w-3/4 ml-5 pl-1">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' htmlFor="lastname">
                        Email
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-b-2 border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-gray-900 focus:border-b-4' id="email" type="email" placeholder='abc@xyz.com' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <p className='text-gray-600 text-xs italic'>The certificate will be mailed to this email address</p>
                </div>
            <div className='ml-5 mb-2'>
            <button className=' bg-neutral-900 hover:bg-neutral-800 text-white font-bold mt-5 py-2 px-4 border-b-4 border-l-2 border-gray-700 hover:border-gray-500 rounded' onClick={handleClick}>
               Generate
            </button>
            </div>
            </div>
            <Certificate title={issuefor} name={firstName+" "+lastName} date={issueDate} hash={hash}/>
        </div>    
        </>
    )
}

export default CertificateForm