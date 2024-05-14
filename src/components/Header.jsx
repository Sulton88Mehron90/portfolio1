import React, { useState } from 'react'
import menu from '../assets/open_menu.svg'
import close from '../assets/close_menu.svg'
import '../index.css'
import Logo from '../components/Logo'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <header>
            {/* <span>
                Parvin A. Sattorova
            </span> */}

<div className="header-content">
        <Logo /> 
            <button className="menu-btn"
                onClick={() => setIsOpen(!isOpen)}
                area-label='Navigation Menu'
                aria-expanded={isOpen}
            >
                <img src={isOpen? close :menu} alt='menu' />

            </button>
</div>
            <nav className={`nav ${isOpen ? 'open': ''}`} >
                <ul>
                    <li>
                        <a href='#about'>About</a>

                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
