import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Home/Header/Header';
import './SignUp.css';

const SignUp = () => {
    return (
        <>
            <Header></Header>
            <div className='signup'>

                <h1>SignUp</h1>
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />
                <InputGroup size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />
                <Link to='/login'><p>Already have an account?  Login</p></Link>
                <Button>Sign Up</Button>
            </div>
        </>
    );
};

export default SignUp;