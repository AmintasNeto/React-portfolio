import React, { useState } from 'react';
import './qualifications.css';
import { Courses, Experiences } from './Data';

const Qualifications = () => {
    const [ToggleTab, setToggleTab] = useState(0);
  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My personel journey</span>

        <div className="qualification__container conteiner">
            <div className="qualification__tabs">
                <div className={`qualification__button ${ToggleTab === 0 ? "qualification__active" : ""} button--flex`}
                onClick={() => setToggleTab(0)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>

                <div className={`qualification__button ${ToggleTab === 1 ? "qualification__active" : ""} button--flex`}
                onClick={() => setToggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={`qualification__content ${ToggleTab === 0 ? "qualification__content-active" : ""}`}>
                    {Courses.map((item, index) => 
                        index % 2 === 0 ? (
                            <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.place}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    {item.year}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    ) : (
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.place}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    {item.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`qualification__content ${ToggleTab === 1 ? "qualification__content-active" : ""}`}>
                    {Experiences.map((item, index) => 
                        index % 2 === 0 ? (
                            <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.place}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    {item.year}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    ) : (
                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">{item.title}</h3>
                                <span className="qualification__subtitle">{item.place}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>{" "}
                                    {item.year}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualifications