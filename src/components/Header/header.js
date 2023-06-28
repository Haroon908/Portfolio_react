import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/Haroon2.png'
import HeaderSocials from './HeaderSocials'

function header(props) {
  return (
    <header >
      <div className="container header__container">
        <h5>Hello I am </h5>
        <h1>{props.name}</h1>
        <h5 className="text-light">{props.expertise}</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default header