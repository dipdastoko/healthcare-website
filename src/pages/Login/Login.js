import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';
import './Login.css';

const Login = () => {
    const [err, setErr] = useState('');

    const { firebaseAuths } = useAuth();
    const { setUser, logInUsingGoogle, logInWithEmailPass, setIsLoading } = firebaseAuths;

    const navigate = useNavigate();
    const location = useLocation();
    const redirect_url = location.state?.from || '/';

    let email, password;

    const getEmail = e => {
        email = e.target.value;
    }
    const getPass = e => {
        password = e.target.value;
    }

    const signInGoogle = () => {
        logInUsingGoogle();
    }
    const handleLoginButton = () => {
        logInWithEmailPass(email, password)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
                navigate(redirect_url);


            })
            .catch(error => { setErr(error.message); console.log(err) })
            .finally(() => setIsLoading(false))
    }

    return (
        <>
            <Header></Header>
            <div className='login'>

                <h1>Login</h1>

                {/* Login Form */}
                <Form className=''>

                    {/* email input */}
                    <Form.Group onBlur={getEmail} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    {/* password input */}
                    <Form.Group onBlur={getPass} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    {/* Crearte Accout / SignUp */}
                    <Link to='/signup'><p>Create Account? SignUP</p></Link>

                    {/* Show Error */}
                    {err && <p className='text-danger'>{err}</p>
                    }

                    {/* Login Button */}
                    <Button onClick={handleLoginButton} variant="primary">
                        Login
                    </Button>
                </Form>
            </div>
            <br />

            {/* Sign In Google Button */}
            <Button onClick={signInGoogle}><FontAwesomeIcon icon={faGoogle} /> Sign In Using Google</Button>
        </>
    );
};

export default Login;