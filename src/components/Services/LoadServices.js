import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Services from './Services';

const LoadServices = () => {
    const [services] = useServices();
    // console.log(services);
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