import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href='https://www.linkedin.com/in/haroon-saif-450b1a230/' target='__blank'><FaLinkedin/></a>
        <a href='https://github.com/Haroon908' target='__blank'><SiGithub/></a>
    </div>

    )
}

export default HeaderSocials