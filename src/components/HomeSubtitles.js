import React, { useEffect } from 'react';
import './HomeSubtitles.css';

const HomeSubtitles = () => {
  useEffect(() => {
    const scrollLinks = document.querySelectorAll('.home-scroll-link');

    const handleScrollClick = (event) => {
      event.preventDefault();
      const target = event.currentTarget.getAttribute('href');
      const section = document.querySelector(target);

      if (section) {
        const topOffset = section.offsetTop;

        window.scrollTo({
          top: topOffset - 10,
          behavior: 'smooth',
        });
      }
    };

    const getClosestSection = () => {
      const sections = Array.from(document.querySelectorAll('section'));
      const buffer = 200;

      return sections.reduce((closest, section) => {
        const topOffset = section.offsetTop - buffer;
        const distance = Math.abs(topOffset - window.pageYOffset);

        if (distance < closest.distance) {
          return { section, distance };
        }

        return closest;
      }, { section: null, distance: Infinity }).section;
    };

    const updateActiveLink = () => {
      const closestSection = getClosestSection();

      scrollLinks.forEach((link) => {
        const target = link.getAttribute('href');
        const section = document.querySelector(target);

        if (section === closestSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    scrollLinks.forEach((link) => {
      link.addEventListener('click', handleScrollClick);
    });

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);

    return () => {
      scrollLinks.forEach((link) => {
        link.removeEventListener('click', handleScrollClick);
      });

      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
    };
  }, []);

  return (
    <div className="home-subtitles">
      <h2><a className="home-scroll-link" href="#About">About</a></h2>
      <h2><a className="home-scroll-link" href="#Projects">Projects</a></h2>
      <h2><a className="home-scroll-link" href="#Contact">Contact</a></h2>
    </div>
  );
};

export default HomeSubtitles;
