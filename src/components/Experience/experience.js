import React from 'react'
import './experience.css'
import { BsCheckCircleFill } from 'react-icons/bs'

function experience() {
  return (
    <section id='experience'>
      <h5>Skills I have</h5>
      <h2>Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

          </div>
        </div>
        {/* BackEnd Development */}
        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>Django</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience_details'>
              <BsCheckCircleFill className='experience_details-icon'/>
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience