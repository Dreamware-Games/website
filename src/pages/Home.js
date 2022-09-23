import React from 'react';
import { Container } from 'react-bootstrap'
import { Platforms } from '../components/Platforms';

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <h2 className='mt-3 center'>Indie game developer</h2>
            <Container className='mt-2 center'>
                <Platforms />
            </Container>
        </Container>
    )
}