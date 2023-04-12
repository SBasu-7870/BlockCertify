import React from 'react'

function Navbar() {
  return (
    <div className='flex flex-row justify-around py-4 w-full'>
       <h1 className='text-2xl font-bold mt-2'>BlockCertify</h1>
       <nav className='hidden lg:block'>
          <div className='flex flex-wrap border-2 border-solid border-gray-900 rounded-full px-1 py-1 appearance-none'>
             <ul className='font-medium flex flex-row justify-between w-full transition-colors duration-500 ease-in-out'>
               <li className='relative p-2 hover:bg-zinc-950 hover:text-white rounded-full' >Home</li>
               <li className='relative p-2  hover:bg-zinc-950 hover:text-white rounded-full' >About</li>
             </ul>
          </div>
       </nav>
       <button className='bg-zinc-950 border-2 text-white rounded-full py-3 px-5 hover:rounded-2xl'>Login</button>
    </div>
  )
}


export default Navbar;