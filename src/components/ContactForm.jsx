  // https://formspree.io/f/mqkrjwek
  
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Icons } from './Icons';
import '../components/ContactForm.css';
import '../index.css';

const ContactForm = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/mqkrjwek', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        toast.success('Message sent successfully!', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }
        });
        setFormData({ email: '', name: '', message: '' });
      } else {
        toast.error('Failed to send message.', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: 'var(--primary)',
            color: 'var(--white)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }
        });
      }
    });
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <h2>Feel free to get in touch with me. Thank you!</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your Email Address *</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="name">Your Name *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <label htmlFor="message">Message *</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        <ToastContainer />
      </div>
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
    </div>
  );
};

export default ContactForm;
