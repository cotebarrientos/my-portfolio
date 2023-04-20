import React, { Fragment, useEffect } from 'react'
import '../../assets/Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Row,
    Col,
    Image,
    Badge
} from 'react-bootstrap'
import { FiGlobe } from 'react-icons/fi'
import Fitness_Heroes_Gym_website from '../../img/fitness_heroes_gym.jpg'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import jquery from '../../img/jquery.png'
import wordpresspic from '../../img/wordpress.png'
import phppic from '../../img/php.png'


const FitnessHeroesGym = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-left">
                <Col xs={12}
                    className="my-auto d-lg-none d-xl-none d-xxl-none">
                    <Image
                        src={Fitness_Heroes_Gym_website}
                        alt="Fitness Heroes Gym Website"
                        className="d-block mx-auto shadow web-image"
                        fluid />
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                        <Badge bg="dark shadow">Fitness Heroes Gym</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This project consisted of creating <strong>a custom WordPress theme</strong> for
                        a <em>fictitious gym</em>. This theme contains advanced WordPress features such
                        as <strong>Advance Custom Fields</strong> and <strong>Custom Post Types</strong>.
                    </p>
                    <p className="font-exo project-description mt-4">
                        Main technologies used:
                    </p>
                    <span>
                        <Image
                            src={html}
                            alt="html"
                            className="tech-used" fluid />
                        <Image
                            src={css}
                            alt="css"
                            className="tech-used" fluid />
                        <Image
                            src={javascript}
                            alt="javascript"
                            className="tech-used" fluid />
                        <Image
                            src={jquery}
                            alt="jQuery"
                            className="tech-used" fluid />
                        <Image
                            src={wordpresspic}
                            alt="WordPress"
                            className="tech-used" fluid />
                        <Image
                            src={phppic}
                            alt="php"
                            className="tech-used" fluid />
                    </span>
                    <p className="mt-3 text-end">
                        <a
                            href="https://dev-gymfitnessappproject.pantheonsite.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Fitness Heroes Gym website"
                            className="link-icons"
                        >
                            <FiGlobe />
                        </a>
                    </p>
                </Col>
                <Col lg={6}
                    className="my-auto d-none d-lg-block d-xl-block d-xxl-bock">
                    <Image
                        src={Fitness_Heroes_Gym_website}
                        alt="Fitness Heroes Gym Website"
                        className="d-block mx-auto shadow web-image"
                        fluid />
                </Col>
            </Row>
        </Fragment>
    )
}

export default FitnessHeroesGym