import React from 'react'

function Contact() {
  return (
    <div id="Contact" className='utama-contact'>
      <div data-aos="fade-up">
        <h1>Contact Me</h1>
      </div>
      <div data-aos="zoom-in-down">
        <a href="mailto:tasbiriya29@gmail.com" className='email-contact animate__animated animate__tada'>
          <img src="/gmail.png" alt="Gmail" />
          <p>tasbiriya29@gmail.com</p>
        </a>
      </div>
      <div className='contact-sosmed'>
        <div data-aos="flip-left">
          <a href="https://www.instagram.com/tasbi.khz_29/"><img src="/icon-ig.png" alt="Instagram" className="animate__animated animate__zoomIn animate__delay-3s" /></a>
        </div>
        <div data-aos="flip-left">
          <a href="https://www.linkedin.com/in/tasbi-zuhriya/"><img src="/icon-linkedn.png" alt="Linkedn" className="animate__animated animate__zoomIn animate__delay-2s" /></a>
        </div>
        <div data-aos="flip-left">
          <a href="https://github.com/Zuhriya29"><img src="/icon-github.png" alt="Github" className="animate__animated animate__zoomIn animate__delay-1s" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
