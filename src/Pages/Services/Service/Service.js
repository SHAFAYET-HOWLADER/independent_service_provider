import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Service.css'
const Service = ({service}) => {
    const {name, img, description, id, price} = service;
    const navigate = useNavigate();
    const navigateToDetails = (id)=>{
       navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt='img'/>
            <div className='service_text'>
              <h3>{name}</h3>
              <h3>{price}</h3>
              <p>{description}</p>
              <button onClick={()=>navigateToDetails(id)}>Explore &nbsp;<FaArrowRight style={{color:"gold",marginBottom:"2px"}}/> </button>
            </div>
        </div>
    );
};

export default Service;