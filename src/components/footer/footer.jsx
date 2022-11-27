import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
 
const footer = () => {
  return (
    <footer>
      {/* <a href='#' className='footer__logo'>JAINENDRA</a> */}

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='http://instagram.com'><FiInstagram /></a>
        <a href='https://www.linkedin.com/in/jainendra-pratap/'><BsLinkedin /></a>
        <a href='https://github.com/ishu116'><BsGithub /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy;copyright. ALL rights reserved</small>
      </div>
    </footer>
  )
}

export default footer