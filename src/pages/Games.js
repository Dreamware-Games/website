import React from 'react';

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench } from '@fortawesome/free-solid-svg-icons'


export const Games = () => {
    return (
        <Container className='mt-2'>
            <FontAwesomeIcon className='mr-2 ml-2' icon={faWrench} /> Working on it...
        </Container>
    )
}