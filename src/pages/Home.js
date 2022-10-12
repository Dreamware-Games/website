import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1>Games for everyone!</h1>
            </Container>
            <hr />
            <Row className='intro'>
                <Col className='mt-2 mb-2' md>
                    Recently founded (Aug. 2022), currently one man indie game development company with a simple ambition:
                    Making accessible games that everyone can play, irregardless of any disability or impairment!
                </Col>
            </Row>
        </Container>
    )
}