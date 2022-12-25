import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Home = () => {
    return (
        <div className='hero-container'>
            <Container className='mt-5 wrapper'>
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
        </div>
    )
}