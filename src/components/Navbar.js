import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

  useEffect(() => {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.currentTarget.getAttribute('href');
        const section = document.querySelector(target);

        if (section) {
          const topOffset = section.offsetTop;

          window.scrollTo({
            top: topOffset - 10, // Adjust the offset if needed
            behavior: 'smooth',
          });
        }
      });
    });

    // Clean up event listeners on unmount
    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="navigate">
      <ul className="nav-links">
        <li>
          <a className="scroll-link" id="home-link" href="#Home">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a className="scroll-link" id="about-link" href="#About">
            <i className="fas fa-user"></i>
          </a>
        </li>
        <li>
          <a className="scroll-link" id="projects-link" href="#Projects">
            <i className="fas fa-suitcase"></i>
          </a>
        </li>
        <li>
          <a className="scroll-link" id="contact-link" href="#Contact">
            <i className="fas fa-phone"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
