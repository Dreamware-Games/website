import { React, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faPaperPlane, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/menubar.css'

export const MenuBar = () => {

    const [expanded, setExpanded] = useState(false)

    return (
        <Navbar expanded={expanded} className='cstm-navbar' expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand as={Link} to='/' onClick={() => setExpanded(false)} className='cstm-navbar-home'>Dreamware Games</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='mr-auto navlink'>
                        <Nav.Link as={Link} to='/games' onClick={() => setExpanded(false)}><FontAwesomeIcon icon={faGamepad} />&nbsp;Games</Nav.Link>
                        <Nav.Link as={Link} to='/about' onClick={() => setExpanded(false)}><FontAwesomeIcon icon={faCircleInfo} />&nbsp;About</Nav.Link>
                        <Nav.Link as={Link} to='/contact' onClick={() => setExpanded(false)}><FontAwesomeIcon icon={faPaperPlane} />&nbsp;Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}