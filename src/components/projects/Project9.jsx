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
import RockPaperScissorsGame from '../../img/rock-paper-scissors.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'


const Project9 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-right">
                <Col lg={6} 
                    className="my-auto">
                        <Image 
                            src={RockPaperScissorsGame}
                            alt="Rock-Paper-Scissors Game"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Rock-Paper-Scissors Game</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This was an assignment for the Brainnest specialization course. This project 
                        consists of a rock-paper-scissors game, and the game is won by the first to 
                        win 5 rounds, where you will confront the computer. Can you beat the computer, 
                        or is it superior to you?
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
                            href="https://github.com/cotebarrientos/js-2-assignments"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Rock-Paper-Scissors Game repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://cotebarrientos.github.io/js-2-assignments/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Rock-Paper-Scissors Game website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Project9
