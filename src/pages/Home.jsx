import React from 'react'
import Hero from '../components/Hero.jsx'
import Marqueee from '../components/Marquee.jsx'
import About from './About.jsx'
import Features from '@/components/Features.jsx'
import Book from './Book.jsx'
import Contact from './Contact.jsx'
import Shop from './Shop.jsx'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Marqueee />
      <Features />
      <About/>
      <Book/>
      <Shop/>
      <Contact/>

    </div>
  )
}

export default Home