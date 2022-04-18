import React from 'react';
import { Link} from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './ServiceDetails.css'
const ServiceDetails = () => {
    return (
        <section id="details">
            <div className='container'>
            <form className='form_area'>
                    <h3 className='py-3'> Check out here </h3>
                    <div className='input_group'>
                     
                        <input type='name' name='name' id='name' placeholder='Your Name' />
                    </div>
                    <div className='input_group'>
                      
                        <input type='number' name='number' id='number' placeholder='Your Number' required/>
                    </div>
                    <div className='input_group'>
                     
                        <input type='text' name='address' id='address' placeholder='Your Address' required/>
                         
                    </div>
                </form>
               <Link to='/checkOut'>
                 <button className='my-3'>Submit<FaArrowRight style={{fontSize: '15px'}}/> </button>
               </Link>
            </div>
        </section>
    );
};

export default ServiceDetails;