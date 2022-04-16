import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description, id} = service;
    const navigate = useNavigate();
    const navigateToDetails = (id)=>{
       navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt='img'/>
            <div className='service_text'>
              <h3>{name}</h3>
              <p>{description}</p>
              <button onClick={()=>navigateToDetails(id)}>See-Info</button>
            </div>
        </div>
    );
};

export default Service;