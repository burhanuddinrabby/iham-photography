import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

const Services = ({ service }) => {
    const { name, price, description, image } = service;
    return (
        <Col lg={4} md={6} sm={12}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        ${price} per hour
                    </Card.Text>
                    <Button variant="primary">Hire Me</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Services;