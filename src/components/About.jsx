import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='about divider'>
      <h2>About Me</h2>
      <p>
        As a Frontend Software Developer, I love solving complex problems by
        creating simple, intuitive, and engaging digital experiences. With a
        solid foundation in modern JavaScript frameworks like React and a keen
        eye for detail, I specialize in developing responsive, performant, and
        accessible web applications.
      </p>
      <Link to="/detailed-about" className="read-more-link">Read more...</Link>
    </section>
  );
};

export default About;

