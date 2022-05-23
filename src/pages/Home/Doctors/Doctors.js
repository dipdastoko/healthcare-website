import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Doctors = () => {
    return (
        <div>
            <h2>Our Doctors</h2>
            <hr className='mx-5' />
            <Container>
                <Row>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/sVsvWXz/doctor-1.png" alt="" />
                    </Col>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/ZMHGxDS/doctor-2.png" alt="" />
                    </Col>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/cxq6kPz/doctor-3.png" alt="" />
                    </Col>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/ggnLbXj/doctor-4.png" alt="" />
                    </Col>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/gznZsGB/doctor-5.png" alt="" />
                    </Col>
                    <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
                        <img className='rounded-circle w-75' src="https://i.ibb.co/VN2wjgp/doctor-6.png" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;