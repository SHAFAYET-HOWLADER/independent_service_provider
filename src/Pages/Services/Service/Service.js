import React from 'react';

const Service = ({service}) => {
    const {name, img, description, id} = service;
    return (
        <div className='service'>
            <img src={img} alt='img'/>
        </div>
    );
};

export default Service;