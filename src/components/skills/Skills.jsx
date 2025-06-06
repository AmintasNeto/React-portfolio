import React from 'react';
import './skills.css';
import Backend from './Backend';
import Frontend from './Frontend';
import Mobile from './Software';

const Skills = () => {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container conteiner grid">
            <Frontend />

            <Backend />

            <Mobile />
        </div>
    </section>
  )
}

export default Skills