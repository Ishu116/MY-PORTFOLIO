import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_tvfys9o', 'template_bmqlp6k', form.current, 'e3FesPi4XUj6lEVeV');
  };
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className='contact__options'>
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>yashpratapr@gmail.com</h5>
          <a href='mailto:yashpratapr@gmail.com ' className='link-socials' target='blank'>Send Me a Message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon' />
          <h4>Messenger</h4>
          <h5>yashpratapr@gmail.com</h5>
          <a href='mailto:yashpratapr@gmail.com' target='blank' className='link-socials'>Send Me a Message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <h5>yashpratapr@gmail.com</h5>
          <a href='https://api.whatsapp.com/send?phone=9149046612' target='blank' className='link-socials'>Send Me a Message</a>
        </article>
      </div>
      {/* End of Contact-Option */}

      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required></input>
        <input type='email' name='email' placeholder='Your Email' required></input>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact