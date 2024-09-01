import React from 'react';
import './Contact.css'; // Import the CSS file for this component

const Contact = () => {
  return (
    <section id="Contact">
      <div className="particles-container" id="particles-js-contact"></div>
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <div className="email">
          <p><i className="fas fa-envelope"></i>: haklaitom@gmail.com</p>
        </div>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/tomhaklai/" target="_blank" rel="noopener noreferrer" className="contact-icon linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/tomhakdev" target="_blank" rel="noopener noreferrer" className="contact-icon github">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
