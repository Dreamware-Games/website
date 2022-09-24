import React from 'react';
import { Container } from 'react-bootstrap'
import { Platforms } from '../components/Platforms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUnity } from '@fortawesome/free-brands-svg-icons'

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <h2 className='mt-3 center'>Indie game developer</h2>
            <Container className='mt-2 center'>
                We specialize in Unity, developing games for Steam, Xbox and Playstation.
            </Container>
            <Container className='mt-2 center'>
                <FontAwesomeIcon size='3x' icon={faUnity} title='Unity' />
            </Container>
            <Container className='mt-2 center'>
                <Platforms />
            </Container>
        </Container>
    )
}