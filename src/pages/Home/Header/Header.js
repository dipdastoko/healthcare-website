import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Services</Nav.Link>
                            <Nav.Link href="#home">Doctors</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Nav.Link href="#link">SignUp</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;