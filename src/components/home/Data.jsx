import React from 'react';
import { HelloButton } from './HelloButton';

const Data = () => {
  return (
    <div className="home__data">
        <h1 className="home__title">
            Amintas Neto
        </h1>
        <h3 className='home__subtitle'>Fullstack Developer</h3>

        <p className="home__description">
            A skilled Web Developer, 
            proficient in building responsive interfaces and robust APIs, 
            with solid experience in databases and agile workflows.
        </p>

        <HelloButton />
    </div>
  )
}

export default Data