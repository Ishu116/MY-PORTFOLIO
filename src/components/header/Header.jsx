import React from 'react'
import "./header.css"
import CTA from "./CTA"
import ME from '../../assets/me5.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  var ReactRotatingText = require('react-rotating-text');
  return (
    <header>
    <div className='container header__container'>
      <div className='Container__head'>
      <h2>Hello I am</h2>
      <h1>Jainendra</h1>
      <h2 className='text-light'><ReactRotatingText items={['MERN Stack Developer','Coding Enthusiast']} /></h2>
      </div>
      <CTA />
    
      <HeaderSocial />

      <div className='me'>
        <img className='me1' src={ME} alt='me' />
      </div>

      <a href='#contact' className='scroll__down link-socials'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header