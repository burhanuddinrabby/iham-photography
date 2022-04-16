import React from 'react';
import { Carousel } from 'react-bootstrap';
import Footer from '../Blogs/Footer/Footer';
import './Home.css'

const Body = () => {
    return (
        <div className='mt-5'>
            <Carousel>
                <Carousel.Item className='car-img'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Pw46wWW/th-9.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <h3>Capture Your Moment</h3>
                        <p>Frame yourself traveling, having fun, nature etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='car-img'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/3FvYLRF/th-12.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <h3>Capture Your Moment</h3>
                        <p>Frame yourself traveling, having fun, nature etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='car-img'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Pw46wWW/th-9.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <h3>Capture Your Moment</h3>
                        <p>Frame yourself traveling, having fun, nature etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='car-img'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/3FvYLRF/th-12.jpg"
                        alt="First slide"
                    ></img>
                    <Carousel.Caption>
                        <h3>Capture Your Moment</h3>
                        <p>Frame yourself traveling, having fun, nature etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <Footer></Footer>
        </div>
    );
};

export default Body;