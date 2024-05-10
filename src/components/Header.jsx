import React from 'react'
import menu from '../assets/open_menu.svg'

export default function Header() {
    return (
        <header>
            <span>
                Parvin A. Sattorova
            </span>
            <button className="menu-btn">
                <img src={menu} alt='menu' />

            </button>

            <nav className='nav'>
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
