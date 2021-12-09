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
import crud_simple_app from '../../img/crud_simple_app.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import bootstrap from '../../img/bootstrap.png'
import reactjs from '../../img/reactjs.png'
import firebase from '../../img/firebase.png'

const Project5 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-right">
                <Col lg={6} 
                    className="my-auto">
                        <Image 
                            src={crud_simple_app}
                            alt="CRUD simple app"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">CRUD simple app</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This mini project was part of the exercises performed in my React and Redux specialization 
                        courses taught by Udemy. It's an app where you can create an user account and there you 
                        can save your activities in a TODO list.
                    </p>
                    <br />
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
                            href="https://github.com/cotebarrientos/login-udemy-exercise"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="CRUD simple app repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://login-udemy-exercise.web.app/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="CRUD simple app website"
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

export default Project5
