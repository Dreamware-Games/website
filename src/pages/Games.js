import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import GameImageGallery from '../components/GameImageGallery'
import { Platforms } from '../components/Platforms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUnity } from '@fortawesome/free-brands-svg-icons'

export const Games = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1><FontAwesomeIcon icon={faGamepad} />&nbsp;Games</h1>
            </Container>
            <hr />
            <Row>
                <Col className='mt-3 mb-2' md>
                    <GameImageGallery />
                </Col>
                <Col className='mt-3 mb-2' md>
                    <Container className='center'>
                        Games available on Steam, Xbox and Playstation.
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