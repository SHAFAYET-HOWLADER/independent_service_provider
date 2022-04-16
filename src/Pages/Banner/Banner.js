import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner_one from '../../banner_img/banner-1.jpg';
import banner_two from '../../banner_img/banner-2.jpg';
import banner_three from '../../banner_img/banner-3.jpg';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_one}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Gymnasium Center</h1>
                    <h3>Put your weights back.</h3>
                    <p>a large room used for various indoor sports (such as basketball or boxing) and usually equipped with gymnastic apparatus.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_two}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Gymnasium Center</h1>
                    <h3>Keep the equipment where it belongs.</h3>
                    <p>A gymnasium, also known as a gym, is a covered location for athletics. The word is derived from the ancient Greek term "gymnasium". They are commonly found in athletic and fitness centres, and as activity and learning spaces in educational institutions.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner_three}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Gymnasium Center</h1>
                    <h3>Be mindful of your surroundings.</h3>
                    <p>school for gymnastics," from the Greek gymnasion, "public place where exercises are practiced.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;