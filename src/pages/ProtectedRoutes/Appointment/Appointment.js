import React from 'react';
import { Badge, Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Appointment.css';

const Appointment = () => {
    const { doctorId } = useParams();
    const { doctors } = useAuth();
    const doctor = doctors.find(doctor => doctor.id === parseInt(doctorId));
    const { name, department, designation } = doctor;
    return (
        <div>
            <h3>Book Appointment To</h3>

            <h2>{name}</h2>
            <h4>{designation}</h4>
            <h6>{department}</h6>
            <hr className='mx-5' />
            <Badge><h5>Patient's Information</h5></Badge>
            <Form className='text-start appointment'>
                <br />
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control type="text" placeholder="patient's name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><b>Age</b></Form.Label>
                    <Form.Control type="text" placeholder="age" />
                </Form.Group>
                <Form.Label><b>Blood Group</b></Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Select Blood Group</option>
                    <option value="1">A+</option>
                    <option value="2">B+</option>
                    <option value="3">O+</option>
                    <option value="3">AB+</option>
                    <option value="1">A-</option>
                    <option value="2">B-</option>
                    <option value="3">O-</option>
                    <option value="3">AB-</option>

                </Form.Select>
                <br />
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><b>Phone Number</b></Form.Label>
                    <Form.Control type="text" placeholder="01xxxxxxxxx" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label><b>Email</b></Form.Label>
                    <Form.Control type="email" placeholder="email address" />
                </Form.Group>
                <Button variant='success'>Submit</Button>
            </Form>
        </div>
    );
};

export default Appointment;