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
import MyCalculator from '../../img/my-calculator.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'


const Project10 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-left">
                <Col xs={12}
                    className="my-auto d-lg-none d-xl-none d-xxl-none">
                        <Image 
                            src={MyCalculator}
                            alt="My Calculator App: A simple calculator"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">My Calculator</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This was my final assignment for the Brainnest specialization course. The 
                        main purpose of this project was to create a calculator capable of performing 
                        simple calculations.
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
                        <Image 
                            src={javascript} 
                            alt="javascript"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/my-calculator"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="My calculator repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://cotebarrientos.github.io/my-calculator/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="My calculator website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
                <Col lg={6}
                    className="my-auto d-none d-lg-block d-xl-block d-xxl-bock">
                        <Image 
                            src={MyCalculator}
                            alt="My Calculator App: A simple calculator"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Project10
