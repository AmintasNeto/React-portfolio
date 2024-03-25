import React from 'react'

const Mobile = () => {
  return (
    <div className="skill__content">
    <h3 className="skills__title">Mobile developer</h3>

    <div className="skills__box">
      <div className="skills__group">
        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Flutter</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Scrum</h3>
            <span className="skills__level">Basic</span>
          </div>
        </div>

        <div className="skills__data">
          <i className="bx bx-badge-check"></i>

          <div>
            <h3 className="skills__name">Git</h3>
            <span className="skills__level">Intermediate</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Mobile