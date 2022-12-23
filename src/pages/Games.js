import React from 'react';
import { Link, useParams } from "react-router-dom";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { faUnity } from '@fortawesome/free-brands-svg-icons'

//import GameImageGallery from '../components/GameImageGallery'
import { GameInfo } from '../components/gameinfo/GameInfo'
import { Platforms } from '../components/Platforms';
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
                        {/*<GameImageGallery />*/}
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
                        {/*<Container className='mb-4'>
                            <h2>Project Icarus</h2>
                            <p>
                                <i>
                                    2D co-op platformer with configurable controls to support gameplay
                                    with any type of adaptive controllers.
                                </i>
                            </p>
                            <p>
                                Follow the adventures of two siblings, as they traverse dark forrests, vulcanic mountains and
                                ruinous cities in search of their father.
                            </p>
                            <p>
                                <i>
                                    Expected release Q3 2023
                                </i>
                            </p>
                        </Container>
                        <Container className='mb-4'>
                            <h2>Project Needle</h2>
                            <p>
                                <i>
                                    3D neon racer based on a beloved character from the gaming world.
                                </i>
                            </p>
                            <p>
                                Race against uncompromising enemies looking to destroy you in your quest to save the world
                                from evil robot masters.
                            </p>
                            <p>
                                <i>
                                    Expected release Q4 2024
                                </i>
                            </p>
                        </Container>*/}
                    </Col>
                    <Col className='mt-3 mb-2' md>
                        <Container className='center'>
                            Coming to Steam, Xbox and Playstation.
                        </Container>
                        <Container className='mb-3 mt-2 center'>
                            <Platforms />
                        </Container>
                        <Container className='center'>
                            Made with Unity.
                        </Container>
                        <Container className='mt-2 center'>
                            <FontAwesomeIcon size='3x' icon={faUnity} title='Unity' />
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