import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faPaperPlane, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/menubar.css'

export const MenuBar = () => {
    return (
        <Navbar className='cstm-navbar' expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href='/'>Dreamware Games™</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='/games'><FontAwesomeIcon icon={faGamepad} />&nbsp;Games</Nav.Link>
                        <Nav.Link href='/about'><FontAwesomeIcon icon={faCircleInfo} />&nbsp;About</Nav.Link>
                        <Nav.Link href='/contact'><FontAwesomeIcon icon={faPaperPlane} />&nbsp;Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}