import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
        <a 
            href='https://www.instagram.com/neto_gomes18' 
            className='home__social-icon' 
            target='_blank'>
            <i className='uil uil-instagram'></i>
        </a>

        <a 
            href='https://www.linkedin.com/in/amintas-gomes-de-moraes-neto-533947235' 
            className='home__social-icon' 
            target='_blank'>
            <i className='uil uil-linkedin-alt'></i>
        </a>

        <a 
            href='https://github.com/AmintasNeto' 
            className='home__social-icon' 
            target='_blank'>
            <i className='uil uil-github-alt'></i>
        </a>
    </div>
  )
}

export default Social