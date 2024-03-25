import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container conteiner">
            <h1 className="footer__title">Amintas Neto</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a 
                    href='https://www.instagram.com/neto_gomes18' 
                    className='footer__social-link' 
                    target='_blank'>
                    <i className='uil uil-instagram'></i>
                </a>

                <a 
                    href='https://www.linkedin.com/in/amintas-gomes-de-moraes-neto-533947235' 
                    className='footer__social-link' 
                    target='_blank'>
                    <i className='uil uil-linkedin-alt'></i>
                </a>

                <a 
                    href='https://github.com/AmintasNeto' 
                    className='footer__social-link' 
                    target='_blank'>
                    <i className='uil uil-github-alt'></i>
                </a>
            </div>
            <span className="footer__copy">
                &#169; Amintas Neto. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer