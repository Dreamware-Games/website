import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
import { Separator } from '../../components/common/Separator';


export const ArcadeClassics = () => {

    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1><FontAwesomeIcon icon={faGamepad} />&nbsp;Arcade Classics</h1>
            </Container>
            <Separator />
            <Row>
                <Col className='mt-3 mb-2' md>
                    <Container className='mb-4'>
                        <p>
                            Remake of a select few arcade classics, in a 16bit friendly art style:
                            Asteroids, Brick Breaker, Alien Invasion (and two other titles that we haven't decided yet).
                        </p>
                        <p>
                            Fun to play games with a lot of variation and easy to jump in/out of.
                            Good for a few minutes of relaxed gaming, achievement/trophy-hunting and nostalgia.
                            Clean and friendly looking environments, easy on the eye.
                        </p>
                        <p>
                            <b>Expected release June 1st 2023 on Steam, Xbox and Playstation.</b>
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}