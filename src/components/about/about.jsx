import React from 'react'
import "./about.css"
import ME from "../../assets/me-about1.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from "react-icons/vsc"
import { FaCertificate } from 'react-icons/fa'


const about = () => {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image"></img>
        </div>
      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>
          <article className='about__card'>
            <FaCertificate className="about__icon" />
            <h5>Certificates</h5>
            <small>5+ Certificates</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>10+ Projects</small>
          </article>
        </div>
        <p contentEditable='true'>
        Hey there, I am Jainendra,  currently pursuing a Bachelor of Engineering in Computer Science, and I am confident that my skills and knowledge will make me a valuable asset to any team. I am a highly motivated and results-oriented individual with a strong passion for technological statistics. I have a proven track record of success in learning and applying new concepts, and I am always eager to take on new challenges.
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti minima, optio doloremque laboriosam omnis velit accusantium cumque alias error nostrum, veritatis possimus necessitatibus perferendis dolore. Provident nisi mollitia eum! */}
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default about