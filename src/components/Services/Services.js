import React from 'react'
import './Services.css'
import {AiOutlineCheck} from 'react-icons/ai'

function Services() {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>Back-End Development</h3>
          </div>
          <ul className='service_list'>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Proficient in Django framework.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Worked in Django REST framework.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Familiar with version control systems like Git.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Familiar with CI/CD pipelines.</p>
            </li>
            
          </ul>
        </article>



        <article className="service">
          <div className="service_head">
            <h3>Front-End development</h3>
          </div>
          <ul className='service_list'>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Profficient in HTML.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Works with CSS.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Language I use for front-end development is JavaScript.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Framework used by me for front-end is REACTjs.</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service_head">
            <h3>Video Editing</h3>
          </div>
          <ul className='service_list'>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Video Editing.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Color correction and Grading.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Audio editing and Mixing.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Motion graphics and Visual Effects.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Video Transitions and Effects</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services