import React from 'react'

function LoginComponent(props) {
  const {title, description} = props;
  return (
    <div className='flex flex-col justify-center items-center my-4 mx-auto w-1/3 h-96 max-w-lg border-solid border-2 border-black rounded-lg shadow-xl'>
       <h1 className='block text-2xl my-2 mx-auto'>{title}</h1>
       <p className='text-sm bold mb-4'>{description}</p>
       <hr className='block w-2/3 border-solid border border-black justify-center'/>
       <form className='m-2 p-1'>
         <label htmlFor="email" className='block text-sm text-gray-700 font-bold mb-2'>Email</label>
         <input type="email" placeholder='example@xyz.com' className='shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:shadow-outline'/>

         <label htmlFor="password" className='block text-sm text-gray-700 font-bold mb-2 mt-4'>Password</label>
         <input type="password" placeholder='password' className='shadow appearance-none border border-gray-800 rounded w-full py-2 px-3 text-gray-500 leading-tight transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 focus:outline-none focus:shadow-outline'/>
         <button className=' bg-neutral-900 hover:bg-neutral-800 text-white font-bold mt-5 py-2 px-4 border-b-4 border-l-2 border-gray-700 hover:border-gray-500 rounded'>
           Login
         </button>
         <a className='flex justify-center mt-5 mb-5 font-bold text-sm text-stone-900 hover:text-stone-800' href="#">
          Forgot Password?
         </a>
       </form>
    </div>
  )
}

export default LoginComponent