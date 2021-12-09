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
import MyPokeApp from '../../img/MyPokeApp.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import bootstrap from '../../img/bootstrap.png'
import reactjs from '../../img/reactjs.png'
import reduxpic from '../../img/reduxpic.png'
import firebase from '../../img/firebase.png'

const Project6 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-left">
                <Col xs={12}
                    className="my-auto d-lg-none d-xl-none d-xxl-none">
                        <Image 
                            src={MyPokeApp}
                            alt="MyPokeApp"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">MyPokeApp</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This mini project was one of many exercises I did while I was studying 
                        React and Redux on Udemy. The app queries directly to the Pokemon API, 
                        and also the user can log in with a google account thanks to Firebase. 
                        Personally this was the exercise I enjoyed the most.
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
                        <Image 
                            src={reactjs} 
                            alt="react"
                            className="tech-used" fluid/>
                        <Image 
                            src={reduxpic} 
                            alt="redux"
                            className="tech-used" fluid/>
                        <Image 
                            src={bootstrap} 
                            alt="bootstrap"
                            className="tech-used" fluid/>
                        <Image 
                            src={firebase} 
                            alt="firebase"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/udemy-redux-exercise"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="MyPokeApp repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://my-poke-app.web.app/login"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="MyPokeApp website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
                <Col lg={6}
                    className="my-auto d-none d-lg-block d-xl-block d-xxl-bock">
                        <Image 
                            src={MyPokeApp}
                            alt="MyPokeApp"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Project6
