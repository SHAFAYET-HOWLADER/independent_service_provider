import React from 'react';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description, id} = service;
    return (
        <div className='service'>
            <img src={img} alt='img'/>
            <div className='service_text'>
              <h3>{name}</h3>
              <p>{description}</p>
              <button>See-Info</button>
            </div>
        </div>
    );
};

export default Service;