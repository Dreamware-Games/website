import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap'

import '../assets/css/menubar.css'
import logo from '../assets/images/logo_white_205x100.png'

export const MenuBar = () => {

    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} className='cstm-navbar' collapseOnSelect expand='lg' variant='dark'>
            <Container>
                <Navbar.Brand className='navbar-brand' as={Link} to='/' onClick={() => setExpanded(false)}>
                    <img
                        src={logo}
                        width='102.5'
                        height='50'
                        className='d-inline-block align-top'
                        alt='Dreamware Games'
                    />
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto navlink'>
                        <NavItem>
                            <Nav.Link as={Link} to='/games' onClick={() => setExpanded(false)}>Games</Nav.Link>
                        </NavItem>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <Nav.Link as={Link} to='/about' onClick={() => setExpanded(false)}>About</Nav.Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}