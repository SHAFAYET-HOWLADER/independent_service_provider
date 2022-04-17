import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <section id="details">
            <div className='container'>
                <h2 className='section_title'>This is service details {serviceId}</h2>
               <Link to='/checkOut'>
                 <button>Check Out</button>
               </Link>
            </div>
        </section>
    );
};

export default ServiceDetails;