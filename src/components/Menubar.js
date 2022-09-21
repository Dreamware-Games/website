import React from 'react'

import { Container, Nav, Navbar } from 'react-bootstrap'

import '../assets/css/menubar.css'

export const MenuBar = () => {
    return (
        <Navbar className='cstm-navbar' variant='dark'>
            <Container>
                <Navbar.Brand href='/'>Home</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href='/games'>Games</Nav.Link>
                    <Nav.Link href='/about'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}