import React from 'react'
import Hero from '../components/Hero.jsx'
import About from './About.jsx'
import Book from './Book.jsx'
import Contact from './Contact.jsx'
import Shop from './Shop.jsx'
const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Book/>
      <Shop/>
      <Contact/>

    </div>
  )
}

export default Home