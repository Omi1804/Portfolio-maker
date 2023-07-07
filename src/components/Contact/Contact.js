import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div >
    <div className='contact'> <h1>CONTACT ME</h1></div>
    <div className="contact-container">
      <div className="contact-info">
        <p>Email: pragya2021010@akgec.ac.in</p>
      </div>
      <div className="contact-info">
        <p>Phone:+91 8604789802</p>
      </div>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/example/" target="_blank" rel="noopener noreferrer" className="contact-link">
          LinkedIn
        </a>
        <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="contact-link">
          GitHub
        </a>
      </div>
    </div>
    </div>
  );
}

export default Contact;