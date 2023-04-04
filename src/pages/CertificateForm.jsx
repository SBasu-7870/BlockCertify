import React,{useState} from 'react'
import Certificate from '../components/Certificate';

function CertificateForm() {
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("")
    const [org,setOrg] = useState("")
    const [issuefor,setIssueFor] = useState("")
    const [issueDate,setIssueDate] = useState(null)
    const [expiryDate,setExpiryDare] = useState(null);
    const [email,setEmail] = useState("");

    const hash = "nedcnocjaojcncncncn";

    return (
        <>
        <div className='flex flex-row'>
            <div className='flex flex-wrap items-center w-1/3 mt-5'>
                <div className='="w-full md:w-1/2 px-6 mb-6 md:mb-0'>
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="firstname">
                        First Name
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="firstname" type="text" placeholder='John' value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Last Name
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="lastname" type="text" placeholder='Doe' value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Organization
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="organisation" type="text" placeholder='IEM' value={org} onChange={(e)=> setOrg(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Certified For*
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="certify" type="text" placeholder='' value={issuefor} onChange={(e)=> setIssueFor(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/2 px-6 mb-6 md:mb-0">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Date of Issue
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="issue" type="date" placeholder='dd-mm-yyyy' value={issueDate} onChange={(e)=> setIssueDate(e.target.value)}/>
                </div>
                <div class="w-full md:w-1/2 px-3">
                <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Valid Till
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="valid" type="date" placeholder='dd-mm-yyy' value={expiryDate} onChange={(e)=> setExpiryDare(e.target.value)}/>
                </div>
                <div class="w-3/4 ml-5 pl-1">
                    <label className='block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2' for="lastname">
                        Email
                    </label>
                    <input className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-slate-50 focus:border-blue-800' id="email" type="email" placeholder='abc@xyz.com' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <p className='text-gray-600 text-xs italic'>The certificate will be mailed to this email address</p>
                </div>
            <div className='w-1/3 ml-5 pl-1'>Certificate ID: {hash}</div>
            </div>
            <Certificate title={issuefor} name={firstName+" "+lastName} date={issueDate} hash={hash}/>
        </div>    
        </>
    )
}

export default CertificateForm