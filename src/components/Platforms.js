import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons'


export const Platforms = () => {
    return (
        <Container className='mt-2 center'>
            <Row>
                <Col><FontAwesomeIcon size='3x' icon={faSteam} title='Steam' /></Col>
                <Col><FontAwesomeIcon size='3x' icon={faXbox} title='Xbox' /></Col>
                <Col><FontAwesomeIcon size='3x' icon={faPlaystation} title='Playstation' /></Col>
            </Row>
        </Container>
    )
}
