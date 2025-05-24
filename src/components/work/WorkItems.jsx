import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
        <img src={item.image} alt='' className='work__img'/>
        <h3 className="work__title">{item.title}</h3>

        {item.link !== null && item.link !== undefined && item.link !== '' &&
            <a href={item.link} className="work__button">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </a>
        }
        
        <a href={item.repository} className="work__button">
            Repository <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <span className="work__subtitle">
            Description: {item.description}
        </span>
        <span className="work__subtitle">
            Technologies: {item.technologies}
        </span>
    </div>
  )
}

export default WorkItems