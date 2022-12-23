import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

import { ArcadeClassics } from './ArcadeClassics'


export const GameInfo = ({ gameId }) => {

    function DisplayGameInfo() {
        if (gameId === 'arcade-classics') {
            return <ArcadeClassics />
        } else {
            return <DefaultInfo />
        }
    }

    function DefaultInfo() {
        return (
            <Container className='mt-2 wrapper'>
                <Container className='mt-4 mb-3 center'>
                    <h1><FontAwesomeIcon icon={faGamepad} />&nbsp;{gameId}</h1>
                </Container>
                <hr />
                <Row>
                    <Col className='mt-3 mb-2' md>
                        <Container className='mb-4'>
                            Working on it, information on it's way!
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <DisplayGameInfo />
    )
}