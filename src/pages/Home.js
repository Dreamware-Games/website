import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { Separator } from '../components/common/Separator';


export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1>Games for everyone!</h1>
            </Container>
            <Separator />
            <Row className='intro'>
                <Col className='mt-2 mb-2' md>
                    Indie game development with a simple ambition:
                    <br /><span className="intro-header">Games for everyone!</span>
                </Col>
                <Col className='mt-2 mb-2' md>
                    Check out our ongoing projects and get in touch if you have any questions
                    or an idea for a game you would like to develop or publish.
                    <Container className='mt-4'>
                        <Button className='m-2' as={Link} to='/games' variant='dark'>
                            Games
                        </Button>
                        <Button as={Link} to='/contact' variant='dark'>
                            Contact
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}