import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

import { GameInfo } from '../components/gameinfo/GameInfo'
import { Separator } from '../components/common/Separator';


export const Games = () => {

    const { gameId } = useParams()

    function RenderGameInfo() {
        if (gameId) {
            return <GameInfo gameId={gameId} />
        } else {
            return <DefaultGameInfo />
        }
    }

    function DefaultGameInfo() {
        return (
            <Container className='mt-2 wrapper'>
                <Container className='mt-4 mb-3 center'>
                    <h1><FontAwesomeIcon icon={faGamepad} />&nbsp;Games</h1>
                </Container>
                <Separator />
                <Row>
                    <Col className='mt-3 mb-2' md>
                        <Container className='mb-4'>
                            <p>
                                We are working on multiple projects, all currently in the planning/prototyping phase.
                            </p>
                            <p>
                                Check back for more details soon or contact us.
                            </p>
                            <p>
                                <Button as={Link} to='/contact' variant='dark'>
                                    Contact
                                </Button>
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        < RenderGameInfo />
    )
}