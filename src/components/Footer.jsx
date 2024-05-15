import React from 'react';
import '../index.css';


const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer>
        <span>Parvin A. Sattorova {currentYear}&copy;</span>
      </footer>
    );
  };
  export default Footer;