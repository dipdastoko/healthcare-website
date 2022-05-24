import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Doctor from './Doctor';

const Doctors = () => {
    const { doctors } = useAuth();
    return (
        <div>
            <h2>Our Doctors</h2>
            <hr className='mx-5' />
            <Container>
                <Row>
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                        ></Doctor>)
                    }
                </Row>
            </Container>

        </div>

    );
};

export default Doctors;