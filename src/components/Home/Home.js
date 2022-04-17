import React from 'react';
import { Carousel } from 'react-bootstrap';
import AutumnEditiing from '../AutumnEditing/AutumnEditiing';
import LoadServices from '../Services/LoadServices';
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
                        <h1>Capture Your Moment</h1>
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
                        <h1>Capture Your Moment</h1>
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
                        <h1>Capture Your Moment</h1>
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
                        <h1>Capture Your Moment</h1>
                        <p>Frame yourself traveling, having fun, nature etc.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <LoadServices></LoadServices>
            <AutumnEditiing></AutumnEditiing>
        </div>
    );
};

export default Body;