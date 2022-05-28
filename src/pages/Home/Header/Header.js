import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    let activeStyle = {
        color: "blue",
        textDecoration: "none"
    };
    let inactiveStyle = {
        color: "gray",
        textDecoration: "none"
    }
    const { firebaseAuths } = useAuth();
    const { user, logOut } = firebaseAuths;
    const handleLogOutButton = () => {
        logOut();
        console.log(user.displayName);
    }
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink
                                to='/home'
                                style={
                                    ({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                }
                            ><h5>Home</h5></NavLink>
                            {user?.email ? <Button onClick={handleLogOutButton}>Logout</Button> :
                                <>
                                    <NavLink
                                        className='mx-3'
                                        to='/login'
                                        style={
                                            ({ isActive }) =>
                                                isActive ? activeStyle : inactiveStyle
                                        }
                                    ><h5>Login</h5></NavLink>
                                    <NavLink
                                        to='/signup'
                                        style={
                                            ({ isActive }) =>
                                                isActive ? activeStyle : inactiveStyle
                                        }
                                    ><h5>SignUp</h5></NavLink>
                                </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;