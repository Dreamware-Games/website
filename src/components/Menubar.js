import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'

import '../assets/css/menubar.css'

export const MenuBar = () => {
    return (
        <Navbar className='cstm-navbar' expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href='/'>Dreamware Games™</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/games'>Games</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}