import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {CiInstagram} from 'react-icons/ci'
import {BsTwitter} from 'react-icons/bs'


function footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>Haroon</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href=''><BsFacebook/></a>
        <a href=''><CiInstagram/></a>
        <a href=''><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Haroon Portfolio.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer