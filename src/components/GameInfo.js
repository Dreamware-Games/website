import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

export const GameInfo = ({ gameId }) => {

    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1><FontAwesomeIcon icon={faGamepad} />&nbsp;{gameId}</h1>
            </Container>
            <hr />
            <Row>
                <Col className='mt-3 mb-2' md>
                    {/*<GameImageGallery />*/}
                    <Container className='mb-4'>
                        Working on it, information on it's way!
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}