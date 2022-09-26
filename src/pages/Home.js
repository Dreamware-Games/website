import React from 'react';
import { Container, Col, Row } from 'react-bootstrap'
import GameImageGallery from '../components/GameImageGallery'
import { Platforms } from '../components/Platforms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1>Indie game development</h1>
            </Container>
            <hr />
            <Row>
                <Col className='mt-3 mb-2' md>
                    <GameImageGallery />
                </Col>
                <Col className='mt-3 mb-2' md>
                    <Container className='center'>
                        Games made for Steam, Xbox and Playstation.
                    </Container>
                    <Container className='mt-2 center'>
                        <Platforms />
                    </Container>
                    <Container className='mt-2 center'>
                        <FontAwesomeIcon size='3x' icon={faUnity} title='Unity' />
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}