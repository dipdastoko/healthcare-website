import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';
import './Login.css';

const Login = () => {
    const { firebaseAuths } = useAuth();
    const { user, setUser, logInUsingGoogle, logInWithEmailPass } = firebaseAuths;
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
                console.log(loggedInUser);
                setUser(loggedInUser);
                console.log(user);
            })
    }
    return (
        <>
            <Header></Header>
            <div className='login'>

                <h1>Login</h1>
                <Form className=''>
                    <Form.Group onBlur={getEmail} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group onBlur={getPass} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to='/signup'><p>Create Account? SignUP</p></Link>
                    <Button onClick={handleLoginButton} variant="primary">
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