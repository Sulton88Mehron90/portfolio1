import { Icons } from './Icons';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <p>Let&apos;s connect and create together.</p>
      <div className="socials-container">
        <a href="https://www.linkedin.com/in/parvin-sattorova-edwards-357526b3/">
          <Icons.Linkedin />
        </a>
        <a href="https://github.com/Sulton88Mehron90">
          <Icons.Github />
        </a>
        <a href="https://www.instagram.com/sulimesho/">
          <Icons.Instagram />
        </a>
        <a href="https://twitter.com/nanajon66">
          <Icons.Twitter />
        </a>
        <a href="https://www.facebook.com/parvin.sattorova/">
          <Icons.Facebook />
        </a>
      </div>
    </section>
  );
};

export default Contact;

