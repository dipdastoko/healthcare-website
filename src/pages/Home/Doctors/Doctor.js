import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Doctor = props => {
    const { name, img, department, id } = props.doctor;
    const navigate = useNavigate();
    const viewDetails = () => {
        navigate(`/doctorDetails/${id}`);
    }
    const handleAppointment = () => {
        navigate(`/appointment/${id}`);
    }
    return (
        <Col className='my-5' xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 3, offset: 1 }}>
            <img className='rounded-circle w-75' src={img} alt="" />
            <h4>{name}</h4>
            <h6>{department}</h6>
            <Button onClick={viewDetails} variant="outline-info">View Details</Button><br />
            <Button onClick={handleAppointment} className='mt-2' variant="outline-success">Make Appointment</Button>
        </Col>
    );
};

export default Doctor;