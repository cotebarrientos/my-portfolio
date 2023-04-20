import React, { useEffect } from 'react'
import '../assets/Home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'
import { GrGithub, GrLinkedin } from "react-icons/gr"
import github_pic from '../img/github_pic.jpg'
import hello_world_pic from '../img/hello_world.gif'

const Home = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Container fluid
            id="homeSection"
            className="welcome-img-container"
        >
            <Row className="jumbotron shadow" data-aos="zoom-in-down">
                <Col xs={12} lg={4}
                    className="mx-auto my-auto">
                    <Image
                        src={github_pic}
                        alt="My GitHub pic"
                        className="my-pic d-block mx-auto m-4"
                        data-aos="flip-left"
                        fluid
                    />
                </Col>
                <Col xs={12} lg={6}
                    className="mx-auto my-auto">
                    <h2 className="text-center font-exo badge rounded-pill"
                        data-aos="fade-right">
                        <span>
                            <Image
                                src={hello_world_pic}
                                alt="My GitHub pic"
                                className="hello-pic"
                                data-aos="flip-left"
                                fluid
                            /></span> Hello! My name is
                    </h2>
                    <h1 className="text-center text-uppercase font-exo"
                        data-aos="fade-left">
                        Maria Barrientos
                    </h1>
                    <hr data-aos="fade-up"
                        data-aos-anchor-placement="center-bottom" />
                    <p className="text-center font-outfit"
                        data-aos="zoom-in-down">
                        A Junior Full Stack Web Developer with strong focus on Front-End Development.
                    </p>
                    <Row>
                        <Col
                            id="my-social-media-icons"
                            className="d-flex justify-content-center"
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-bottom">
                            <a
                                href="https://github.com/cotebarrientos"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrGithub className="mb-4 me-2 ms-1" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mjbarrientosv/?locale=en_US"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <GrLinkedin className="mb-4 me-2 ms-1" />
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
