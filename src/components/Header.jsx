// import React, { useState } from 'react'
// import menu from '../assets/open_menu.svg'
// import close from '../assets/close_menu.svg'
// import '../index.css'
// import Logo from '../components/Logo'

// export default function Header() {

//     const [isOpen, setIsOpen] = useState(false)
//     return (
//         <header>
//             {/* <span>
//                 Parvin A. Sattorova
//             </span> */}

// <div className="header-content">
//         <Logo /> 
//             <button className="menu-btn"
//                 onClick={() => setIsOpen(!isOpen)}
//                 area-label='Navigation Menu'
//                 aria-expanded={isOpen}
//             >
//                 <img src={isOpen? close :menu} alt='menu' />

//             </button>
// </div>
//             <nav className={`nav ${isOpen ? 'open': ''}`} >
//                 <ul>
//                     <li>
//                         <a href='#about'>About</a>

//                     </li>
//                     <li>
//                         <a href='#projects'>Projects</a>
//                     </li>
//                     <li>
//                         <a href='#contact'>Contact</a>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import menu from '../assets/open_menu.svg';
import close from '../assets/close_menu.svg';
import '../index.css';
import Logo from '../components/Logo';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

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
            {isHomePage ? (
              <HashLink to="/#about" className="nav-link">About</HashLink>
            ) : (
              <NavLink to="/#about" className="nav-link" activeClassName="active-link">About</NavLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <HashLink to="/#projects" className="nav-link">Projects</HashLink>
            ) : (
              <NavLink to="/#projects" className="nav-link" activeClassName="active-link">Projects</NavLink>
            )}
          </li>
          <li>
            {isHomePage ? (
              <HashLink to="/#contact" className="nav-link">Contact</HashLink>
            ) : (
              <NavLink to="/#contact" className="nav-link" activeClassName="active-link">Contact</NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
