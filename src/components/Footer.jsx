import React from 'react'
import { GrGithub, GrLinkedin } from "react-icons/gr"
import { 
    Container,
    Row,
    Col} from 'react-bootstrap'

const Footer = () => {

    const currentYear = (new Date().getFullYear())
    const yearTxt = currentYear === 2021 ? "2021" : "2021 - " + currentYear

    return (
        <Container fluid
            className="background-color">
            <footer>
                <Row className="mx-auto my-auto">
                    <Col lg={12}
                        id="footer-icons"
                        className="d-flex justify-content-center">
                            <a 
                                href="https://github.com/cotebarrientos" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <GrGithub className="mb-3 mt-4 me-2 ms-1 circle-icon"/>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mjbarrientosv/?locale=en_US"
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <GrLinkedin className="mb-3 mt-4 me-2 ms-1 circle-icon"/>
                            </a>
                    </Col>
                    <Col lg={12} 
                        className="text-light text-center">
                        <p className="font-exo">
                            © {yearTxt}, Designed and Built by Maria Barrientos
                        </p>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}

export default Footer
