import React from 'react'
import '../assets/Contact.css'
import { IoIosSend } from 'react-icons/io'
import { 
    Container,
    Form,
    Row,
    Col,
    Button} from 'react-bootstrap'

const Contact = () => {
    return (
        <Container fluid 
            id="contactSection" 
            className="contact-img-container"
        >
            <Container className="contact-background text-light shadow">
                <h2 className="text-center font-outfit text-uppercase mt-5">Contact</h2>
                <Form className="font-exo">
                    <Row className="h-100">
                    <hr className="web-hr mx-auto my-auto" />
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group controlId="formGridName" className="mt-5">
                                <Form.Label className="text-uppercase custom-label">Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" className="mb-3" />
                            </Form.Group>
                        </Col>
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group controlId="formGridEmail">
                                <Form.Label className="text-uppercase custom-label">Email:</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" className="mb-3" />
                            </Form.Group>
                        </Col>
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group className="mb-3" controlId="ControlTextarea">
                                <Form.Label className="text-uppercase custom-label">Message:</Form.Label>
                                <Form.Control as="textarea" rows={5} placeholder="Write your message"/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="h-100">
                        <Col className="d-grid gap-2 d-md-flex justify-content-center">
                            <Button type="submit" className="mt-4 mb-5 custom-button text-uppercase">
                                Send Message
                                <span className="ms-2">
                                    <IoIosSend />
                                </span>
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </Container>
    )
}

export default Contact
