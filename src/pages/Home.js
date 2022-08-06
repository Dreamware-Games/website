import React from 'react';

import { Container } from 'react-bootstrap'

import logo from '../assets/images/logo_black_512x512.png'

export const Home = () => {

    return (
        <>
            <Container className='center'>
                <img
                    src={logo}
                    alt='Dreamware Games'
                />
            </Container >
        </>
    )
}