import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1>For everyone!</h1>
            </Container>
            <hr />
            <Row className='intro'>
                <Col className='mt-2 mb-2' md>
                    We believe everyone should be able to enjoy video games,
                    irregardles of any physical challenge they may face.
                </Col>
            </Row>
        </Container>
    )
}