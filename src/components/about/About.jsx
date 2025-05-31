import React from 'react';
import './about.css'
import AboutImg from '../../assets/perfil2.jpg';
import { CvButton } from './downloadCvButton';

const About = () => {
  return (
    <section className="about section" id='about'>
        
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container conteiner grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">

                <p className="about__description">
                    Web Developer with solid experience in building both front-end and back-end solutions. Skilled in
                    technologies such as Next.js, ASP.NET, Java Spring Boot, React, and Flutter.

                </p>
                <p className="about__description">
                    Proficient in designing and maintaining RESTful APIs, web services, and responsive interfaces. Experienced with databases
                    (PostgreSQL, Firebase), version control (Git, GitLab), and agile methodologies (Scrum, Kanban).
                </p>
                <p className="about__description_last">
                    Constantly seeking to optimize processes and deliver efficient, scalable solutions.
                </p>

                <div className="about__button">
                    <CvButton />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About