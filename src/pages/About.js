import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

export const About = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1><FontAwesomeIcon icon={faCircleInfo} />&nbsp;About</h1>
            </Container>
            <hr />
            <Row>
                <Col className='mt-2 mb-2' md>
                    A small indie game development company, located in Oslo, Norway.
                </Col>
            </Row>
        </Container >
    )
}