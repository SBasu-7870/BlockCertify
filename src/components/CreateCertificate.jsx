import React,{useState} from 'react'
import Certificate from './Certificate';

function CreateCertificate() {
  const[title,setTitle] = useState("");
  const[name,setName] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const hash="rhsdkzfhkwshc";
  return (
    <>
    <div className='flex items-center flex-shrink m-0'>
    <div className='flex flex-col justify-center items-center my-4 mx-auto w-1/3 h-2/3 max-w-lg border-solid border-2 border-black rounded-lg shadow-xl'>
    <h1 className='block text-2xl my-2 mx-auto'>Hello</h1>
    <p className='text-sm bold mb-4'>certificate</p>
    <hr className='block w-2/3 border-solid border border-black justify-center'/>
    <form className='m-2 p-1'>
      <label for="title" className='block text-sm text-gray-700 font-bold mb-2'>Title</label>
      <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='enter title' className='shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:shadow-outline'/>

      <label for="name" className='block text-sm text-gray-700 font-bold mb-2 mt-4'>Name</label>
      <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='enter name' className='shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:shadow-outline'/>
      <button className=' bg-neutral-900 hover:bg-neutral-800 text-white font-bold mt-5 py-2 px-4 border-b-4 border-l-2 border-gray-700 hover:border-gray-500 rounded'>
        Generate
      </button>
    </form>
 </div>
 <Certificate title={title} name={name} date={date} hash={hash}/>
 </div>
  </>
  )
}

export default CreateCertificate