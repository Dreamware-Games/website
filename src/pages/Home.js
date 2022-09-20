import React from 'react';

import { Container } from 'react-bootstrap'

import logo from '../assets/images/logos/logo_black_512x200.png'

export const Home = () => {

    return (
        <>
            <Container className='mt-5 wrapper'>
                <Container className='center'>
                    <Container>
                        <img
                            src={logo}
                            alt='Dreamware Games'
                        />
                    </Container>
                </Container>
            </Container >
        </>
    )
}