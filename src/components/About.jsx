import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id='about' className='about divider'>
      <h2>About Me</h2>
      <p>Hello, I hope this finds you well.</p>
      <p>
        I'd like to introduce myself, I aim to continue learning the craft of
        becoming a skilled Front-End Software Developer. I've worked in the
        software industry for 17 years, a period I do not regret. However, the
        work I truly enjoyed was when it was visually creative, involving the
        craft of code that brings visuals to the forefront, making people's
        moments spent on the web or app enjoyable and seamless.
      </p>
      <Link to="/detailed-about" className="read-more-link">Read more...</Link>
    </section>
  );
};

export default About;

