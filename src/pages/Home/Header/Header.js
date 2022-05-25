import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        color: "blue",
        textDecoration: "none"
    };
    let inactiveStyle = {
        color: "gray",
        textDecoration: "none"
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

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;