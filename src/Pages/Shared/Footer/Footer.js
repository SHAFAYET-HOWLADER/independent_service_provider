import React from 'react';
import './Footer.css'
import FooterInfo from './FooterInfo/FooterInfo';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <div>
          <FooterInfo></FooterInfo>
           <section id="footer">
            <div className='container'>
                <p>All right reserved &copy; Gymnasium Center.com {year}</p>
            </div>
       </section>
      </div>
    );
};

export default Footer;