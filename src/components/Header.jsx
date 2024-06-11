// import React, { useState } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import menu from '../assets/open_menu.svg';
// import close from '../assets/close_menu.svg';
// import '../index.css';
// import Logo from '../components/Logo';

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   const isHomePage = location.pathname === '/';
//   const isAboutPage = location.pathname === '/detailed-about' || (location.hash === '#about' && isHomePage);
//   const isProjectsPage = location.pathname === '/detailed-projects' || (location.hash === '#projects' && isHomePage);
//   const isContactPage = location.pathname === '/contact-form' || (location.hash === '#contact' && isHomePage);

//   return (
//     <header>
//       <div className="header-content">
//         <Logo />
//         <button
//           className="menu-btn"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-label="Navigation Menu"
//           aria-expanded={isOpen}
//         >
//           <img src={isOpen ? close : menu} alt="menu" />
//         </button>
//       </div>
//       <nav className={`nav ${isOpen ? 'open' : ''}`}>
//         <ul>
//           <li>
//             <NavLink to="/" exact className={`nav-link ${isHomePage ? 'active-link' : ''}`}>Home</NavLink>
//           </li>
//           <li>
//             {isHomePage ? (
//               <HashLink to="/#about" className={`nav-link ${isAboutPage ? 'active-link' : ''}`}>About</HashLink>
//             ) : (
//               <NavLink to="/detailed-about" className={`nav-link ${isAboutPage ? 'active-link' : ''}`}>About</NavLink>
//             )}
//           </li>
//           <li>
//             {isHomePage ? (
//               <HashLink to="/#projects" className={`nav-link ${isProjectsPage ? 'active-link' : ''}`}>Projects</HashLink>
//             ) : (
//               <NavLink to="/detailed-projects" className={`nav-link ${isProjectsPage ? 'active-link' : ''}`}>Projects</NavLink>
//             )}
//           </li>
//           <li>
//             {isHomePage ? (
//               <HashLink to="/#contact" className={`nav-link ${isContactPage ? 'active-link' : ''}`}>Contact</HashLink>
//             ) : (
//               <NavLink to="/contact-form" className={`nav-link ${isContactPage ? 'active-link' : ''}`}>Contact</NavLink>
//             )}
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menu from '../assets/open_menu.svg';
import close from '../assets/close_menu.svg';
import '../index.css';
import Logo from '../components/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const location = useLocation();

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 50 && location.pathname === '/') {
      setActiveLink('home');
    }
  }, [location.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    if (location.hash === '#about') {
      setActiveLink('about');
    } else if (location.hash === '#projects') {
      setActiveLink('projects');
    } else if (location.hash === '#contact') {
      setActiveLink('contact');
    } else if (location.pathname === '/') {
      setActiveLink('home');
    } else if (location.pathname === '/detailed-about') {
      setActiveLink('about');
    } else if (location.pathname === '/detailed-projects') {
      setActiveLink('projects');
    } else if (location.pathname === '/contact-form') {
      setActiveLink('contact');
    }
  }, [location]);

  return (
    <header>
      <div className="header-content">
        <Logo />
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Navigation Menu"
          aria-expanded={isOpen}
        >
          <img src={isOpen ? close : menu} alt="menu" />
        </button>
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" exact className={`nav-link ${activeLink === 'home' ? 'active-link' : ''}`}>Home</NavLink>
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink to="/#about" className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`}>About</HashLink>
            ) : (
              <NavLink to="/detailed-about" className={`nav-link ${activeLink === 'about' ? 'active-link' : ''}`}>About</NavLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink to="/#projects" className={`nav-link ${activeLink === 'projects' ? 'active-link' : ''}`}>Projects</HashLink>
            ) : (
              <NavLink to="/detailed-projects" className={`nav-link ${activeLink === 'projects' ? 'active-link' : ''}`}>Projects</NavLink>
            )}
          </li>
          <li>
            {location.pathname === '/' ? (
              <HashLink to="/#contact" className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`}>Contact</HashLink>
            ) : (
              <NavLink to="/contact-form" className={`nav-link ${activeLink === 'contact' ? 'active-link' : ''}`}>Contact</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
