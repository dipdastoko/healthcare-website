import { Button, FormControl, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Header from '../Home/Header/Header';
import './SignUp.css';

const SignUp = () => {

    const { firebaseAuths } = useAuth();
    const navigate = useNavigate();

    const { signUpWithEmailPass, updateUserName, setUser, setIsLoading } = firebaseAuths;

    let name, email, password;
    const getName = e => {
        name = e.target.value;

    }
    const getEmail = e => {
        email = e.target.value
    }
    const getPassword = event => {
        password = event.target.value;
    }

    const handleSignUpButton = () => {
        signUpWithEmailPass(email, password)
            .then(result => {
                updateUserName(name);
                const registeredUser = result.user;
                setUser(registeredUser);
                navigate('/home');
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <>
            <Header></Header>
            <div className='signup'>

                <h1>SignUp</h1>

                {/* Name Field */}
                <InputGroup onBlur={getName} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />

                {/* Email Field */}
                <InputGroup onBlur={getEmail} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />

                {/* Password Field */}
                <InputGroup onBlur={getPassword} size="lg">
                    <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                    <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>
                <br />
                <Link to='/login'><p>Already have an account?  Login</p></Link>
                <Button onClick={handleSignUpButton}>Sign Up</Button>
            </div>
        </>
    );
};

export default SignUp;