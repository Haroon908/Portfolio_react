import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/contact'
import Testimonials from './components/Testimonials/Testimonials'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Experience from './components/Experience/experience'
import Nav from './components/Nav/nav'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  return (
    <>
    <Header name="Haroon Saif Ullah" expertise="Full Stack Developer"/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App