import React from 'react'
import './style.scss'
import { CiStopwatch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className='hero'>
       <h2>Mortgages
       <span>made simple</span></h2>
       <section className='options'>
       <div className="btn">
        <button>Start my approval</button>
        <p><CiStopwatch size='1.2rem'/>3min|No credit impact</p>
       </div>
       <div className="rating">
         <div className="icons">
          <FcGoogle size='1.5rem'/>
          <FaStar color='yellow' size='1.5rem'/>
          <FaStar color='yellow' size='1.5rem'/>
          <FaStar color='yellow' size='1.5rem'/>
          <FaStar color='yellow' size='1.5rem'/>
          <FaStarHalfStroke color='yellow' size='1.5rem'/>
         </div>
         <p>4.6 Stars|3177 Google reviews</p>
       </div>
       </section>
    </div>
  )
}

export default Hero