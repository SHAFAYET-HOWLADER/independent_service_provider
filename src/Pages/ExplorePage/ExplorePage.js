import React from 'react';
import fitness from '../../banner_img/fitness(1).jpg';
import './ExplorePage.css'
const ExplorePage = () => {
    return (
        <section id="explore">
            <div className='container'>
                <h2 className='section_title'>I am Suggesting</h2>
              <div className='explore_content'>
                 
                 <div className='explore_text'>
                     <h2>Fitness All About</h2>
                     <h3>What is Functional</h3>
                     <h4>You Only Fail When You Stop Trying</h4>
                      <p>
                      Our state of the art gyms provide you with a great place to work out in, whether you are there to burn off some calories or are training for something more specific. Why not visit your nearest Gym Center and take a look? We’re here to help you!
                      </p>
                 </div>
                 <div className='img'>
                     <img src={fitness} alt='img'/>
                 </div>
              </div>
            </div>
        </section>
    );
};

export default ExplorePage;