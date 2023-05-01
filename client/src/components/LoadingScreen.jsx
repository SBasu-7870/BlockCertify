import React from 'react'
import Lottie from "lottie-react";
import LoadingAnimationCirle from "../assets/animations/loading-animation-circle.json"
import './loading.css'

function LoadingScreen() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <div style={{width:300,height:300}}><Lottie animationData={LoadingAnimationCirle} loop={true}/></div>
        <div id="loading-text" className='font-mono text-3xl'>Loading<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>
    </div>
  )
}

export default LoadingScreen