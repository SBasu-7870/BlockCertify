import React from 'react'
import { Link } from 'react-router-dom';

function LoginComponent(props) {
  const { title, description, svgr, content, path } = props;
  return (
    <>
    <div className='flex flex-col items-center text-center my-4 pb-5 mx-auto w-1/3 h-auto max-w-lg border-solid border-2 border-b-4 border-black rounded-2xl shadow-xl transition ease-in-out duration-200 hover:scale-105'>
      <img className='mt-4 mb-2' src={svgr} style={{ height: 50, width: 50 }} />
      <h1 className='block text-2xl my-2 mx-3'>{title}</h1>
      <p className='text-sm bold mb-4 mx-3'>{description}</p>
      <hr className='block w-2/3 border-solid border border-black justify-center' />
      <p className='text-sm bold mt-5'>
        Once logged in, users can:
        <br/>
        <br/>
        <ul className='list-inside list-disc text-justify px-2'>
          {content.map((point) => (
            <li className='mb-2'>{point}</li>
          ))}
        </ul>
      </p>
      <button className='mt-2 p-2 text-md lg:text-xl bg-slate-50 rounded-full border-b-2 border border-black
      hover:border-b-4 transition ease-in-out duration-200 hover:translate-y-1 hover:scale-105'><Link to={path}>{title}</Link></button>
    </div>
    </>
  )
}

export default LoginComponent