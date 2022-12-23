import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'

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
                    An indie game development company, founded August 2022, with a simple ambition:
                    Making accessible games that everyone can play, irregardless of any disability or impairment!
                </Col>
                <Col className='mt-2 mb-2' md>
                    Check out our ongoing projects and get in touch if you have any questions
                    or an idea for a game you would like to develop or publish.
                    <Container className='mt-4'>
                        <Button className='m-2' href='/games' variant='dark'>
                            Games
                        </Button>
                        <Button href='/contact' variant='dark'>
                            Contact
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}