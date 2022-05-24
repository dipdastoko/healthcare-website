import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = props => {
    const { name, img } = props.service;
    const navigate = useNavigate();
    const handleSeeDetails = () => {
        navigate('/serviceDetails');
    }
    return (
        <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
            <Card bg='success' text='light'>
                <br />
                <Card.Title>{name}</Card.Title>
                <br />
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Button onClick={handleSeeDetails} className='bg-dark'>See Details</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Service;