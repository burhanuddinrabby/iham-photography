import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Services from './Services';

const LoadServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <Container className='mt-5'>
                <Row className='g-5 mx-auto'>
                    {
                        services.map(service => <Services key={service.id} service={service}></Services>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default LoadServices;