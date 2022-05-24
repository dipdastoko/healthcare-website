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
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink
                                to='/login'
                                style={
                                    ({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                }
                            >Login</NavLink>
                            <NavLink
                                to='/signup'
                                style={
                                    ({ isActive }) =>
                                        isActive ? activeStyle : inactiveStyle
                                }
                            >SignUp</NavLink>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;