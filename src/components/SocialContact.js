import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


export const SocialContact = () => {
    return (
        <Container className='center'>
            <Row>
                <Col>
                    <a className='cstm-link' href='https://github.com/Dreamware-Games' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faGithub} title='Github' />
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a className='cstm-link' href='https://www.linkedin.com/company/dreamware-games/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon size='2x' icon={faLinkedin} title='LinkedIn' />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
