import React from 'react'
import Navbar from './compenents/Navbar'
import Home from './compenents/Home'
import About from './compenents/About'
import Projects from './compenents/Project'
import Skills from './compenents/Skill'
import Testimonials from './compenents/Testimonial'
import Contact from './compenents/Contact'
import Footer from './compenents/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />  
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact /> 
      <Footer />
    </div>
  )
}

export default App