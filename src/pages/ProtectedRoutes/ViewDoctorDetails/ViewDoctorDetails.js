import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const ViewDoctorDetails = () => {
    const { doctorId } = useParams();
    const { doctors } = useAuth();

    const doctor = doctors.find(doctor => doctor.id === parseInt(doctorId));

    const { img, name, department, designation, about } = doctor;

    return (
        <div className='p-5 m-5'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h4>{designation}</h4>
            <h5>{department}</h5>
            <p>{about}</p>
        </div>
    );
};

export default ViewDoctorDetails;