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
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>



        <article className="service">
          <div className="service_head">
            <h3>Web development</h3>
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
                <p>Language I use for web development is JavaScript.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>Framework used by me for front-end is REACTjs.</p>
            </li>
            <li>
                <AiOutlineCheck className='service_icon'/>
                <p>For back-end,I use python with framework Django.</p>
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