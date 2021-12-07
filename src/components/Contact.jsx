import React, { useRef, useState } from 'react'
import '../assets/Contact.css'
import emailjs from 'emailjs-com'
import { IoIosSend } from 'react-icons/io'
import { 
    Container,
    Form,
    Row,
    Col,
    Button} from 'react-bootstrap'

const Message = () => {
    return (
        <p className="text-center">
            "Your message has been successfully sent. I will contact you soon."
        </p>
    )
}

const Contact = () => {
    const form = useRef()
    const [successMessage, setSuccessMessage] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_xdp3r45', 
            'template_exy4uon', 
            form.current, 
            'user_Dn2NYR5B1sIlHT76ox5HH')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
        setSuccessMessage(true)
    };

    setTimeout(() => {
        setSuccessMessage(false)
    }, 5000)

    return (
        <Container fluid 
            id="contactSection" 
            className="contact-img-container"
        >
            <Container className="contact-background text-light shadow">
                <h2 className="text-center font-outfit text-uppercase mt-5">Contact</h2>
                <Form 
                    className="font-exo"
                    ref={form} 
                    onSubmit={sendEmail}>
                    <Row className="h-100">
                    <hr className="web-hr mx-auto my-auto" />
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group controlId="formGridName" className="mt-5">
                                <Form.Label className="text-uppercase custom-label">Name:</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter your name" 
                                    className="mb-3"
                                    name="name"
                                    maxLength="80" 
                                    required/>
                            </Form.Group>
                        </Col>
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group controlId="formGridEmail" className="mt-3" >
                                <Form.Label className="text-uppercase custom-label">Email:</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="mb-3" 
                                    name="email"
                                    required/>
                            </Form.Group>
                        </Col>
                        <Col lg={8} md={10} xs={11} className="mx-auto my-auto">
                            <Form.Group className="mb-3" controlId="ControlTextarea">
                                <Form.Label className="text-uppercase custom-label">Message:</Form.Label>
                                <Form.Control
                                    as="textarea" 
                                    rows={5} 
                                    placeholder="Write your message"
                                    name="message"
                                    maxLength="5000"
                                    required/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        {successMessage ? <Message /> : null}
                    </Row>
                    <Row className="h-100">
                        <Col className="d-grid gap-2 d-md-flex justify-content-center">
                            <Button 
                                type="submit" 
                                className="mt-4 mb-5 custom-button text-uppercase">
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
