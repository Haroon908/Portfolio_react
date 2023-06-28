import React,{useState} from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FcServices } from 'react-icons/fc'
import { BiUser } from 'react-icons/bi'
import { FaBookOpen } from 'react-icons/fa'
import { IoMdContact } from 'react-icons/io'

// import {FaHome} from 'react-icons/fa'
// import {FaHome} from 'react-icons/fa'


function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav >
      <a href='#' onClick={()=> setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href='#about' onClick={()=> setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}>< BiUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}>< FaBookOpen/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}><FcServices /></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><IoMdContact /></a>
    </nav>
  )
}

export default Nav