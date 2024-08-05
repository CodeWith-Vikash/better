import React, { useRef, useState } from 'react'
import './style.scss'
import { FaPhoneAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaCaretDown } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = ({color}) => {
  const [shownav, setshownav] = useState(false)

  // function to toggle dropdown
  const toggleDropdown = (e) => {
    const icon = e.target.querySelector('.icon');
    const content = e.target.parentElement.querySelector('.dropcontent');
    if (content.style.display === 'none') {
      content.style.display = 'flex';
      icon.style.transform='rotate(180deg)'
    } else {
      content.style.display = 'none';
      icon.style.transform='rotate(0deg)'
    }
  };

  // function to toggleDropdown nav
  const navref=useRef()
  const toggleNav=()=>{
     if(shownav){
        navref.current.style.transform='translateX(0%)'
      }else{
       navref.current.style.transform='translateX(-100%)'
     }
     setshownav(!shownav)
  }
  
  return (
    <>
       <nav style={color?{backgroundColor:color, color:'black'}:null}>
      <div className="right">
      <Link to="/"><h1 style={color?{color:'black'}:{color:'white'}}>Better</h1></Link>
      <ul className="services">
        <li>
          <p>Buy</p>
          <div className="libox">
          <div className="li-content">
            <p>Apply now</p>
            <p>Purchage rates </p>
            <p>Affordibility calculator</p>
            <p>Mortgage calculator</p>
            <p>Buy Vs rent calculator</p>
            <p>Find an agent</p>
            <p>VA loans</p>
            <p>Learning center</p>
          </div>
          </div>
        </li>
        <li>
          <p>Refinance</p>
          <div className="libox">
          <div className="li-content">
            <p>Apply now</p>
            <p>Refinance Rates</p>
            <p>Cash-out refinace calculator</p>
            <p>Learning center</p>
          </div>
          </div>
        </li>
        <li>
          <p>HELOC</p>
          <div className="libox">
          <div className="li-content">
            <p>Apply now</p>
            <p>Calculate your cash💵</p>
            <p>HELOC vs cash-out refinace </p>
            <p>Learning center</p>
          </div>
          </div>
        </li>
        <li>
          <p>Rates</p>
          <div className="libox">
            <div className="li-content">
              <p>Purchase mortage rates</p>
              <p>Refinance Rates</p>
              <p>Refinance cash-out rates</p>
              <p>HELOC rates</p>
              <p>Purchase VA rates</p>
            </div>
          </div>
        </li>
        <li>
          <p>Better+</p>
          <div className="libox">
            <div className="li-content">
              <p>Get insorance</p>
              <p>Tital and closing</p>
              <p>Better Attorny match</p>
              <p>Learning center</p>
              <p>Better agent match <span>for agents</span></p>
              <p>Bettere duo <span>for agents</span></p>
            </div>
          </div>
        </li>
        <li>
          <Link to='/start' title='go to start page'>
            <p>Start</p>
          </Link>
        </li>
      </ul>
      </div>
      <ul className="options">
        <li className='call'>
          <div className="circle">
          <FaPhoneAlt size='1rem'/>
          </div>
          <div className="box">
            <p>call us anytime at <span>451-523-8837</span></p>
          </div>
        </li>
        <li className='sign'>Signup</li>
        <li>
          <button>Continue</button>
        </li>
        <li>
          <GiHamburgerMenu size='1.5rem' className='ham' onClick={toggleNav}/>
        </li>
      </ul>
    </nav>
    {/* slide nav */}
     <section className='sidenav' ref={navref}>
      <div className='nav-heading'>
        <h1>Better</h1>
         <span className='cross'  onClick={toggleNav} >
         <ImCross size='1.2rem'/>
         </span>
      </div>
      <section className="dropdowns">
        <div className="dropdown">
          <div className="drophead" onClick={(e)=>toggleDropdown(e)}>
            <p>Buy</p>
            <FaCaretDown size='1.7rem' className='icon'/>
          </div>
          <div className="dropcontent hide">
          <p>Apply now</p>
            <p>Purchage rates </p>
            <p>Affordibility calculator</p>
            <p>Mortgage calculator</p>
            <p>Buy Vs rent calculator</p>
            <p>Find an agent</p>
            <p>VA loans</p>
            <p>Learning center</p>
          </div>
        </div>
        {/* llll */}
        <div className="dropdown">
          <div className="drophead" onClick={(e)=>toggleDropdown(e)}>
            <p>Refinance</p>
            <FaCaretDown size='1.7rem' className='icon'/>
          </div>
          <div className="dropcontent hide">
            <p>Apply now</p>
            <p>Refinance Rates</p>
            <p>Cash-out refinace calculator</p>
            <p>Learning center</p>
          </div>
        </div>
        {/* llll */}
        <div className="dropdown">
          <div className="drophead" onClick={(e)=>toggleDropdown(e)}>
            <p>HELOC</p>
            <FaCaretDown size='1.7rem' className='icon'/>
          </div>
          <div className="dropcontent hide">
          <p>Apply now</p>
            <p>Calculate your cash💵</p>
            <p>HELOC vs cash-out refinace </p>
            <p>Learning center</p>
          </div>
        </div>
        {/* llll */}
        <div className="dropdown">
          <div className="drophead" onClick={(e)=>toggleDropdown(e)}>
            <p>Rates</p>
            <FaCaretDown size='1.7rem' className='icon'/>
          </div>
          <div className="dropcontent hide">
             <p>Purchase mortage rates</p>
              <p>Refinance Rates</p>
              <p>Refinance cash-out rates</p>
              <p>HELOC rates</p>
              <p>Purchase VA rates</p>
          </div>
        </div>
        {/* llll */}
        <div className="dropdown">
          <div className="drophead" onClick={(e)=>toggleDropdown(e)}>
            <p>Better+</p>
            <FaCaretDown size='1.7rem' className='icon'/>
          </div>
          <div className="dropcontent hide">
             <p>Get insorance</p>
              <p>Tital and closing</p>
              <p>Better Attorny match</p>
              <p>Learning center</p>
              <p>Better agent match <span>for agents</span></p>
              <p>Bettere duo <span>for agents</span></p>
          </div>
        </div>
        {/* llll */}
      </section>
      <div className="call">
      <FaPhoneAlt size='1.5rem'/>
       <p>Call us anytime at <span>(415)523 88371</span></p>
      </div>
       <button className="continue">Continue</button>
       <button className="signin">
        <p>Sign in</p>
        <FaUser/>
       </button>
     </section>
    </>
  )
}

export default Navbar