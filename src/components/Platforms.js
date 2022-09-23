import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSteam, faXbox, faPlaystation } from '@fortawesome/free-brands-svg-icons'


export const Platforms = () => {
    return (
        <Container className='mt-2 wrapper center'>
            <Row>
                <Col><FontAwesomeIcon size='3x' icon={faSteam} /></Col>
                <Col><FontAwesomeIcon size='3x' icon={faXbox} /></Col>
                <Col><FontAwesomeIcon size='3x' icon={faPlaystation} /></Col>
            </Row>
        </Container>
    )
}
