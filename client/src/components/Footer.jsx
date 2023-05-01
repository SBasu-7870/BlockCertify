import React from 'react'
import { Link } from "react-router-dom";
// import {GitHubMark} from "../assets/Icons/GitHubMark.svg"
import logo from '../assets/logo.png'

function Footer() {
  

  return (
    <footer className='flex flex-row justify-between items-center'>
       <div className='my-8 mx-10'>
       <h1 className='text-2xl font-bold my-2'><Link to="/">BlockCertify</Link></h1>
       <p className='block w-1/3'>
        This Project was made under the guidance of Prof Dr.Baisakhi Das of Institute of Engineering And Management Kolkata.
       </p>
       </div>
       <div className='my-8 mx-5'>
       <p>
        <img src={logo} style={{width:100, height:100}} alt="logo"/>
       </p>
       </div>
    </footer>
  )
}

export default Footer