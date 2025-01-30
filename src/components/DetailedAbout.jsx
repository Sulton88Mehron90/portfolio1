import React, { useEffect } from 'react';
import Link from './Link';
import '../components/DetailedAbout.css';

const DetailedAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id='detailed-about' className='detailed-about divider'>
      <h2>About Me</h2>
      <p>
        As a Frontend Software Developer, I love solving complex problems by
        creating simple, intuitive, and engaging digital experiences. With a
        solid foundation in modern JavaScript frameworks like React and a keen
        eye for detail, I specialize in developing responsive, performant, and
        accessible web applications.
      </p>
      <p>
        I bring to the table more than just technical skills. My journey,
        shaped by life experiences such as immigrating to the US with my two
        young sons, has taught me resilience, adaptability, and the value of
        empathy. These qualities, paired with my dedication to continuous
        learning, enable me to balance emotional intelligence with logical
        reasoning in every action I take, every decision I make, and every line
        of code I write.
      </p>
      <h3>What Drives Me & My Toolkit:</h3>
<ul className="combined-list">
  <li><strong>Crafting seamless user experiences:</strong> Clean, maintainable code that prioritizes usability.</li>
  <li><strong>Staying ahead of the curve:</strong> Exploring and integrating new web technologies.</li>
  <li><strong>Collaborating across teams:</strong> Delivering impactful, user-focused solutions.</li>
  <li><strong>Core Technologies:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3.</li>
  <li><strong>Frameworks/Libraries:</strong> React.</li>
  <li><strong>State Management:</strong> Context API.</li>
  <li><strong>Build Tools:</strong> Webpack, Vite, Babel.</li>
  <li><strong>Version Control:</strong> Git/GitHub.</li>
  <li><strong>Specializations:</strong> UI/UX best practices, performance optimization, and accessibility (WCAG compliance).</li>
</ul>
      <p>
        I’m proud of the unique path that has brought me to where I am today.
        Beyond the digital realm, I take immense pride in my heritage and the
        opportunities the US has provided my family and me. I find joy and
        valuable lessons in life’s offerings, which inspire me to continue
        growing and contributing to meaningful projects.
      </p>
      <p>
        Feel free to explore the projects showcased here and visit my{' '}
        <a
          href="https://github.com/Sulton88Mehron90"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>{' '}
        for more details on the code behind my work. I look forward to
        connecting and collaborating with like-minded professionals passionate
        about web development and innovation.
      </p>
      <Link
    href="https://docs.google.com/document/d/17_LOEyom4M1bDCU-l8OyQCCTZbrs7O13/export?format=docx"
    className="btn"
>
        Download my Resume
      </Link>
    </section>
  );
};

export default DetailedAbout;