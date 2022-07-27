import React, { Fragment, useEffect } from 'react'
import '../../assets/Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { 
    Row,
    Col,
    Image,
    Badge} from 'react-bootstrap'
import { GrGithub } from 'react-icons/gr'
import { FiGlobe } from 'react-icons/fi'
import FitnessHeroes from '../../img/fitness-heroes.png'
import html from '../../img/html.png'
import css from '../../img/css.png'

const Project8 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-left">
                <Col xs={12}
                    className="my-auto d-lg-none d-xl-none d-xxl-none">
                        <Image 
                            src={FitnessHeroes}
                            alt="Fitness Heroes Gym website"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Fitness Heroes</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                    This was the second assignment for Brainnest's course. The main objective of 
                    this project was to test the knowledge acquired about CSS and create a website 
                    as close as possible to the template presented by the tutor of this course. The 
                    template simulates the requirements of a hypothetical client.
                    </p>
                    <p className="font-exo project-description mt-4">
                        Main technologies used:
                    </p>
                    <span>
                    <Image 
                            src={html} 
                            alt="html"
                            className="tech-used" fluid/>
                        <Image 
                            src={css} 
                            alt="css"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/main-css-assignment"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Fitness Heroes repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://cotebarrientos.github.io/main-css-assignment/index.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Fitness Heroes website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
                <Col lg={6}
                    className="my-auto d-none d-lg-block d-xl-block d-xxl-bock">
                        <Image 
                            src={FitnessHeroes}
                            alt="Fitness Heroes Gym website"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Project8
