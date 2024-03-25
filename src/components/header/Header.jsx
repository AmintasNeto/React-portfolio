import React, { useState } from 'react';
import './header.css';

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");

        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");


    return (
        <header className='header'>
            <nav className='nav conteiner'>
                <a href='index.html' className='nav__logo'>Amintas Neto</a>

                <div className={`nav__menu ${Toggle ? "show-menu" : ""}`}>
                    <ul className='nav__list grid'>
                        <li className='nav__item'>
                            <a href='#home' 
                            onClick={() => setActiveNav("#home")} 
                            className={`nav__link ${activeNav === "#home" ? "active-link" : ""}`}>
                                <i className='uil uil-estate nav__icon'></i> Home
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#about'
                            onClick={() => setActiveNav("#about")} 
                            className={`nav__link ${activeNav === "#about" ? "active-link" : ""}`}>
                                <i className='uil uil-user nav__icon'></i> About
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#skills' 
                            onClick={() => setActiveNav("#skills")} 
                            className={`nav__link ${activeNav === "#skills" ? "active-link" : ""}`}>
                                <i className='uil uil-file-check nav__icon'></i> Skills
                            </a>
                        </li> 

                        <li className="nav__item">
                            <a href='#qualification' 
                            onClick={() => setActiveNav("#qualification")} 
                            className={`nav__link ${activeNav === "#qualification" ? "active-link" : ""}`}>
                                <i className='uil uil-file-alt nav__icon'></i> Qualifications</a>
                        </li>

                        <li className='nav__item'>
                            <a href='#portfolio' 
                            onClick={() => setActiveNav("#portfolio")} 
                            className={`nav__link ${activeNav === "#portfolio" ? "active-link" : ""}`}>
                                <i className='uil uil-scenery nav__icon'></i> Projects
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href='#contact' 
                            onClick={() => setActiveNav("#contact")} 
                            className={`nav__link ${activeNav === "#contact" ? "active-link" : ""}`}>
                                <i className='uil uil-message nav__icon'></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav__close' onClick={() => showMenu(false)}></i>
                </div>

                <div className='nav__toggle' onClick={() => showMenu(true)}>
                    <i className='uil uil-apps'></i>
                </div>
            </nav>
        </header>
    )
}

export default Header