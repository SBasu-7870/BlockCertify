import React from 'react'
import { Link } from "react-router-dom";
// import {GitHubMark} from "../assets/Icons/GitHubMark.svg"

function Footer() {
  

  return (
    <footer className='flex flex-row justify-around items-center'>
       <div className='my-8 mx-5'>
       <h1 className='text-2xl font-bold my-2'><Link to="/">BlockCertify</Link></h1>
       <p>
        This Project was made under the guidance of Prof Dr.Baisakhi Das of Institute of Engineering And Management Kolkata.
       </p>
       </div>
       <div className='my-8 mx-5'>
       <h1 className='text-2xl font-bold my-2'><Link to="/">BlockCertify</Link></h1>
       <p>
        {/* <img src={GitHubMark} style={{width:50, height:50}}/> */}
       </p>
       </div>
       <div className='my-8 mx-5'>
       <h1 className='text-2xl font-bold my-2'><Link to="/">BlockCertify</Link></h1>
       <p>
       Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
      ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
       </p>
       </div>
    </footer>
  )
}

export default Footer