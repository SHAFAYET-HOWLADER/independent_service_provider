import React from 'react';
import './About.css'
import own from '../../banner_img/myself.jpg';
const About = () => {
    return (
        <section id="about">
            <div className='container'>
                <h2 className='section_title pb-5'>About Me</h2>
                <div className='about_items'>
                    <div className='about_text about_space'>
                        <h3 className='pb-2'>Hello, I am Safayet Howlader</h3>
                        <small>
                            “I am learning frontend development using <mark>JAVASCRIPT</mark>. I am passionate and hard worker. I want to achieve my goals as well. I'm always looking for an opportunity to do better and achieve greatness. In my previous role, I was promoted three times in less than two years.”
                        </small>
                    </div>
                    <div className='about_img about_space'>
                        <img src={own} alt='myself' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;