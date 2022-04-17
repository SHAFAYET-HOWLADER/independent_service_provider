import React from 'react';
import './FooterInfo.css';
import logo from '../../../../banner_img/logo.png';
const FooterInfo = () => {
    return (
        <section id='footerInfo'>
            <div className='container'>
                <div className='footer_content'>
                    <div className='footer_logo'>
                        <h2>Gymnasium center.com</h2>
                        <img src={logo} alt='img' />
                        <h5>GymnasiumCenter.com</h5>
                    </div>
                    <div className='service_list'>
                         <h5 className='ps-3'>Our awesome services</h5>
                        <ul>
                            <li>Stay Fit</li>
                            <li>Abs Fi</li>
                            <li>Body Fitness</li>
                            <li>No Sweat</li>
                            <li>Work Out</li>
                            <li>Fit For Life</li>
                            <li>Working Man's</li>
                            <li>Total Gymnasium</li>
                        </ul>
                    </div>
                    <div className='contact_us'>
                      <h5 className='ps-3'>Contact with us</h5>
                        <div className='contact_info'>
                            <ul>
                                <li>Web   : GymnasiumCenter.com</li>
                                <li>Email : gymnasiumBD#gmail.com</li>
                                <li>Phone : +8801704830855</li>
                                <li>Address : mo:pur, Dhaka, Bangladesh</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FooterInfo;