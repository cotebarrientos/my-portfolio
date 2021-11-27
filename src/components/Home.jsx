import React from 'react'
import '../assets/Home.css'
import { 
    Container,
    Row,
    Col,
    Image} from 'react-bootstrap'
import { GrGithub, GrLinkedin } from "react-icons/gr"
import github_pic from '../img/github_pic.jpg'

const Home = () => {
    return (
        <Container fluid 
            id="homeSection" 
            className="welcome-img-container"
        >
            <Row className="jumbotron shadow">
                <Col xs={12} lg={4} 
                    className="mx-auto my-auto">
                    <Image 
                        src={github_pic} 
                        className="my-pic d-block mx-auto m-4" 
                        fluid 
                    />
                </Col>
                <Col xs={12} lg={6} 
                    className="mx-auto my-auto">
                    <h2  className="text-center font-exo badge rounded-pill">
                        Hello! My name is
                    </h2>
                    <h1 className="text-center text-uppercase font-exo">
                        Maria Barrientos
                    </h1>
                    <hr />
                    <p className="text-center font-outfit">
                        A Junior Full Stack Software Developer with strong focus on Front-End area.
                    </p>
                    <Row>
                        <Col 
                            id="my-social-media-icons" 
                            className="d-flex justify-content-center">
                            <a 
                                href="https://github.com/cotebarrientos" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <GrGithub className="mb-4 me-2 ms-1"/>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/mjbarrientosv/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <GrLinkedin className="mb-4 me-2 ms-1"/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
