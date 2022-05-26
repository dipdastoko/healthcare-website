import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebae';
import Header from '../Home/Header/Header';
import './Login.css';

const Login = () => {
    const { user, logInUsingGoogle } = useFirebase();
    const signInGoogle = () => {
        logInUsingGoogle();
        console.log(user);
    }
    return (
        <>
            <Header></Header>
            <div className='login'>

                <h1>Login</h1>
                <Form className=''>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/signup'><p>Create Account? SignUP</p></Link>
                    <Button variant="primary">
                        Login
                    </Button>
                </Form>
            </div>
            <br />
            <Button onClick={signInGoogle}>Sign In Using Google</Button>
        </>
    );
};

export default Login;