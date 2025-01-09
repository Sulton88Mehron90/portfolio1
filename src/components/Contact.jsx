// 


import { Icons } from './Icons';
import { Link } from 'react-router-dom';
import '../index.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Let&apos;s connect and create together.</p>
      <div className="socials-container">
        <a
          href="https://www.linkedin.com/in/parvin-sattorova-edwards-357526b3/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Icons.Linkedin />
        </a>
        <a
          href="https://github.com/Sulton88Mehron90"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Icons.Github />
        </a>
        <a
          href="https://www.instagram.com/sulimesho/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Icons.Instagram />
        </a>
        <a
          href="https://twitter.com/nanajon66"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Icons.Twitter />
        </a>
        <a
          href="https://www.facebook.com/parvin.sattorova/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Icons.Facebook />
        </a>
      </div>
      <Link to="/contact-form" className="send-message">
        Message me ...
      </Link>
    </section>
  );
};

export default Contact;
