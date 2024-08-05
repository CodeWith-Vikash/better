import React from 'react'
import './start.scss'
import {Link} from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { TbHomeDollar } from "react-icons/tb";
import { CiPercent } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const Start = () => {
  return (
    <div className='start'>
      <header>
        <div className="nav">
        <Link to='/'><h1>
          Better
          <span>Mortgage</span>
        </h1></Link>
        <div className="call">
        <div className="circle">
          <FaPhoneAlt size='1rem' color='green'/>
        </div>
          <p>Need help?Call (415) 523 8837</p>
        </div>
        </div>
        <div className="img">
          <div className='line'></div>
          <img src="/betty1.jpg" alt="" />
        </div>
      </header>
      <p className="title">
        <span>Hi,I'm Betty!</span>
        <span>What can I help you with?</span>
      </p>
      <div className="options">
      <div className="box">
        <TbHomeDollar size='2.5rem' color='#004733'/>
        <p>Buying a home</p>
      </div>
      <div className="box">
        <TbHomeDollar size='2.5rem' color='#004733'/>
        <p>Refinance my mortgage</p>
      </div>
      <div className="box">
        <TbHomeDollar size='2.5rem' color='#004733'/>
        <p>Get cash from my home</p>
      </div>
      </div>
      <div className="users">
      <div className="numbers">
        <div className="number">
          <b>$100B</b>
          <p>home loans funded entirely online</p>
        </div>
        <div className="number">
          <b>400k</b>
          <p>Customers who chose a Better Mortgage</p>
        </div>
      </div>
      </div>
      <section className="quest-sec">
      <div className="question-box">
      <div className="questions">
        <p>After a few questions, you'll unlock:</p>
        <div className="question">
          <CiPercent size='1.6rem' color='green'/>
          <p>Custom mortgage rates</p>
        </div>
        <div className="question">
          <CiDollar size='1.6rem' color='green'/>
          <p>Exclusive offers</p>
        </div>
        <div className="question">
          <MdOutlinePhoneAndroid size='1.6rem' color='green'/>
          <p>A personalized dashboard</p>
        </div>
      </div>
      </div>
      </section>
    </div>
  )
}

export default Start