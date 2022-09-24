import React from 'react';
import { Row, Col, Button, Container, Form } from 'react-bootstrap';

export const Contact = () => {
    return (
        <Container className='mt-2 wrapper'>
            <Row>
                <Col className='mt-2 mb-2' sm>Get in touch with me if you have any ideas or questions.</Col>
                <Col sm>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="You name" />
                            <Form.Text className="text-muted">
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" placeholder="Enter message" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}