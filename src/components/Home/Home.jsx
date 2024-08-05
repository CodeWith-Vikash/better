import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './hero/Hero'
import Testimonials from './testimonials/Testimonials'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Testimonials/>
    </div>
  )
}

export default Home