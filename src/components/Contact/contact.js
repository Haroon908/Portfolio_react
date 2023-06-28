import React, { useRef } from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'
import emailjs from '@emailjs/browser';

function Contact() {
  // using services of emailjs
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ndm59r', 'template_o0q7ewc', form.current, 'fkJul79bTs_AcTs3h')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact</h2>
      <div className="container contact_contrainer">
        <div className="contact__content">
          <div className="contact__cards">
            <article className='contact_card'>
              <MdEmail className='contact_icon' />
              <h3><b>Email</b></h3>
              <a href='mailto:haroonsaif908@gmail.com' target='_blank'>haroonsaif908@gmail.com</a>
            </article>
            <article className='contact_card'>
              <FaLinkedin className='contact_icon' />
              <h3><b>LinkedIn</b></h3>
              <a href='https://www.linkedin.com/in/haroon-saif-450b1a230/' target='_blank'>https://www.linkedin.com/in/haroon-saif-450b1a230/</a>
            </article>
            <article className='contact_card'>
              <ImWhatsapp className='contact_icon' />
              <h3><b>WhatsApp</b></h3>
              <a href='https://api.whatsapp.com/send?phone=03066085954' target='_blank'>Send a message</a>
            </article>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required/>
            <input type="email" name='email'placeholder='Your Email' required/>
            <textarea name="message" cols="30" rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Submit Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact