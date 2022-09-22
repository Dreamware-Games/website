import React from 'react';

import { Container } from 'react-bootstrap'

import GameImageGallery from '../components/GameImageGallery'

export const Home = () => {
    return (
        <Container className='mt-2 wrapper'>
            <h2 className='mt-3 center'>Dreamware Games</h2>
            <Container className='mt-4'>
                <GameImageGallery />
            </Container>
        </Container>
    )
}