import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity } from '@fortawesome/free-brands-svg-icons'

import { Platforms } from '../components/Platforms';
import { Separator } from '../components/common/Separator';


export const Home = () => {
    return (
        <>
            <div className='hero-container'>
                <Container>
                    <Row>
                        <Col md>
                            Indie game development with a simple ambition:
                            <br /><span className="hero-container-header">Games for everyone!</span>
                        </Col>
                        <Col className='hero-container-logo' md>
                            [LOGO]
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='mt-5 wrapper'>
                <Row>
                    <Col className='mt-3 mb-2' md>
                        Game images coming!
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col className='mt-3 mb-2' md>
                        Check out our ongoing projects and get in touch if you have any questions
                        or an idea for a game you would like to develop or publish.
                        <Container className='mt-4 center'>
                            <Button className='m-2' as={Link} to='/games' variant='dark'>
                                Games
                            </Button>
                            <Button className='m-2' as={Link} to='/contact' variant='dark'>
                                Contact
                            </Button>
                        </Container>
                    </Col>
                </Row>
                <Separator />
                <Row>
                    <Col className='mt-3 mb-2' md>
                        <Container className='center'>
                            Made with Unity.
                        </Container>
                        <Container className='mb-3 mt-2 center'>
                            <FontAwesomeIcon size='3x' icon={faUnity} title='Unity' />
                        </Container>
                        <Container className='center'>
                            For Steam, Xbox and Playstation.
                        </Container>
                        <Container className='center'>
                            <Platforms />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}