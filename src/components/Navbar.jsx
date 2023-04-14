import React from 'react'
import { Link } from 'react-router-dom';

function Navbar(props) {
  const {navHidden, buttonHidden, handleHowClick} = props;
  return (
    <div className='flex flex-row justify-around py-4 w-full'>
       <h1 className='text-2xl font-bold mt-2'><Link to="/">BlockCertify</Link></h1>
       <nav className={`hidden ${navHidden?'lg:hidden':'lg:block'}`}>
          <div className='flex flex-wrap border-2 border-solid border-gray-900 rounded-full px-1 py-1 appearance-none'>
             <ul className='font-medium flex flex-row justify-between w-full transition-colors duration-500 ease-in-out'>
               <li className='relative p-2 hover:bg-zinc-950 hover:text-white rounded-full font-mono font-bold' >Home</li>
               <li className='relative p-2  hover:bg-zinc-950 hover:text-white rounded-full font-mono font-bold' onClick={handleHowClick}>How it works</li>
               <li className='relative p-2  hover:bg-zinc-950 hover:text-white rounded-full font-mono font-bold' >About</li>
             </ul>
          </div>
       </nav>
       <button className={` ${buttonHidden?'hidden':''} bg-zinc-950 border-2 text-white font-mono rounded-full py-3 px-5 hover:rounded-2xl`}><Link to="/getStarted">Get Started</Link></button>
    </div>
  )
}


export default Navbar;