import React from 'react';

import { Container } from 'react-bootstrap'

import logo from '../assets/images/logo_black_512x200.png'

export const Home = () => {

    return (
        <>
            <Container className='mt-5 wrapper'>
                <Container className='center'>
                    <img
                        src={logo}
                        alt='Dreamware Games'
                    />
                </Container>
            </Container >
        </>
    )
}