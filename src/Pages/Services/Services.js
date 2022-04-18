import React from 'react';
import gallery_one from '../../banner_img/gallery-1.jpg'
import gallery_three from '../../banner_img/gallery-3.jpg'
import gallery_four from '../../banner_img/gallery-4.jpg'
import gallery_five from '../../banner_img/gallery-5.jpg'
import gallery_six from '../../banner_img/gallery-6.jpg'
import gallery_two from '../../banner_img/gallery-2.jpg'
import team_three from '../../banner_img/team-3.jpg'
import team_one from '../../banner_img/team-1.jpg';
import Service from './Service/Service';
import './Services.css'
const services = [
    {
        name: "Stay Fit.",
        price : '$150',
        id: 1,
        description: 'You must be able to pick out good names from any list by now. Also, you’ll be able to brainstorm new ideas while still keeping the necessary points in mind.',
        img: gallery_two
    },
    {
        name: "Abs Fit",
        price : '$170',
        id: 2,
        description: 'You’ve got a list. Now, is the time to intermingle words. What you need to do is to pick a word from one idea and put it into another and fit it creatively into it.',
        img: gallery_one
    },
    {
        name: "Body Fitness.",
        id: 3,
        price : '$100',
        description: 'From time to time, you’ll see your list of names. And whenever, you feel like some ideas are not very cool to use, you should just cut them out.',
        img: gallery_five
    },
    {
        name: "No Sweat",
        id: 4,
        price : '$200',
        description: 'And imagine if your business names spell hard and people can’t remember it! You could lose a lot of potential energetic potential customers.',
        img: gallery_three
    },
    {
        name: "Work Out",
        id: 5,
        price : '$110',
        description: 'While picking a name for your gym & fitness business, it’s important that you consider if your company will provide services internationally.',
        img: gallery_four
    },
    {
        name: "Fit For Life",
        id: 6,
        price : '$80',
        description: 'For small businesses with a low marketing budget, it is recommended that their business name should tell what they sell usually or serve.',
        img: team_three
    },
    {
        name: "Working Man's",
        id: 7,
        price : '$140',
        description: 'Friendly relations with customers are good for business growing purpose. And a name that tell a perfect story that can give perfectly you a start practice.',
        img: team_one
    },
    {
        name: "Total Gymnasium.",
        id: 8,
        price : '$190',
        description: 'Well! Businesses find an increase in sales department through referral marketing as well,that usually known as “word of mouth” marketing.',
        img: gallery_six
    },
]
const Services = () => {
    return (
        <section id='services'>
          <div className='container'>
          <h2 className='section_title'>My Services</h2>
            <div className='service_items'>
               {
                   services.map(service=> <Service
                     key={service.id}
                     service={service}
                     ></Service>)
               }
            </div>
          </div>
        </section>
    );
};

export default Services;