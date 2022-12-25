import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export const SocialContact = () => {
    return (
        <Container className='mt-2 center'>
            <Row>
                <Col><FontAwesomeIcon size='3x' icon={faGithub} title='Github' /></Col>
                <Col><FontAwesomeIcon size='3x' icon={faLinkedin} title='LinkedIn' /></Col>
            </Row>
        </Container>
    )
}
