import React, { useRef } from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

export const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('sending...')

        /*emailjs.sendForm('service_pn2j8zp', 'template_93f31ew', form.current, 'POSvSMWxvYWAOR8V2')
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })*/
    }

    return (
        <Container className='mt-2 wrapper'>
            <Container className='mt-4 mb-3 center'>
                <h1><FontAwesomeIcon icon={faPaperPlane} />&nbsp;Contact</h1>
            </Container>
            <hr />
            <Row>
                <Col className='mt-2 mb-2' md>
                    Feel free to get in touch with us.
                    We would love to help realize your game idea or answer any questions you might have.
                </Col>
                <Col md>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className='mb-3' controlId='formBasicName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' type='text' placeholder='Your name' />
                            <Form.Text className='text-muted'>
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicEmail'>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb-3' controlId='formBasicMessage'>
                            <Form.Label>Message</Form.Label>
                            <Form.Control name='message' as='textarea' placeholder='Enter message' rows={3} />
                        </Form.Group>
                        <Button variant='dark' type='submit'>
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}