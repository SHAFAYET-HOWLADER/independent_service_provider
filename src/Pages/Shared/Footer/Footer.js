import React from 'react';
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       <section id="footer">
            <div className='container'>
                <p>All right reserved &copy; Gymnasium Center.com {year}</p>
            </div>
       </section>
    );
};

export default Footer;