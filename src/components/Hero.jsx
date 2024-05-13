import React from 'react'
import profileImage from '../assets/Dodobashara.JPG'
import Link from '../components/Link'

const Hero = () => {
  return (
    <section className="hero divider">
      <div className="image">
        <img src={profileImage} alt="Portrait of Parvin A. Sattorova" />
      </div>
      <div>
        <h1>Parvin A. Sattorova</h1>
        <p>Front-End Software Developer</p>
        <p>Lakewood, Colorado</p>
        {/* <a href="#projects" className='btn'>
         Check out my work
       </a> */}

       <Link href="#projects">Check out my work</Link>
      </div>
    </section>
  );
};
export default Hero;