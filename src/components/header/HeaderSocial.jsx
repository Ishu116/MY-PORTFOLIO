import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <small>Social</small>
      <a className='link-socials' href='https://www.linkedin.com/in/jainendra-pratap/' target='-_blank'><BsLinkedin /></a>
      <a className='link-socials' href='http://github.com/ishu116' target='-_blank'><BsGithub /></a>
      <a className='link-socials' href='mailto:yashpratapr@gmail.com' target='-_blank'><SiGmail /></a>
    </div>
  )
}

export default HeaderSocial