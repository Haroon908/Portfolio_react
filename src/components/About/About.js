import React from 'react'
import './About.css'
import Me from '../../assets/Haroon2.png'
import {TbAwardFilled} from 'react-icons/tb'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiFillProject} from 'react-icons/ai'

function About() {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="me"  />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about_card'>
                <TbAwardFilled className='about_icon'/> 
                <h5>Experience</h5>
                <small>1+ years</small>
            </article>
            <article className='about_card'>
                <BsFillPeopleFill className='about_icon'/> 
                <h5>Clients</h5>
                <small>10+ worldwide</small>
            </article>
            <article className='about_card'>
                <AiFillProject className='about_icon'/> 
                <h5>Projects</h5>
                <small>30+ using different Tech stacks</small>
            </article>
          </div>
          <p>Hard-working, creative and proactive. Specialised in Front-end development. Ambitious, eager to keep growing and evolving in my profession. Constantly developing new skills and abilities.</p>
          <a href='#contact' className='btn btn-primary'>Contact</a>
            
        </div>
      </div>
    </section>
  )
}

export default About