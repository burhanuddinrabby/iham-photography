import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import Footer from '../Blogs/Footer/Footer';
import Services from '../Services/Services';
import './Home.css'

const Body = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
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
            <Container className='mt-5'>
                <Row className='g-5 mx-auto'>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Body;