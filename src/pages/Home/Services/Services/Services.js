import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const allServices = useAuth();
    return (
        <div>
            <h2 className='text-start ms-5 mt-5'>Our Services</h2>
            <hr className='me-5' />
            <Container>
                <Row>
                    {
                        allServices.map(service => <Service service={service}></Service>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Services;