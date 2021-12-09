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
import your_argentine_shop from '../../img/your_argentine_shop.jpg'
import aws from '../../img/aws.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import jquery from '../../img/jquery.png'
import my_sql from '../../img/my_sql.png'
import django from '../../img/django.png'
import bootstrap from '../../img/bootstrap.png'
import heroku from '../../img/heroku.png'
import python from '../../img/python.png'
import stripe from '../../img/stripe.png'

const Project4 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-left">
                <Col xs={12}
                    className="my-auto d-lg-none d-xl-none d-xxl-none">
                        <Image 
                            src={your_argentine_shop}
                            alt="Milestone 4"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Your Argentine Shop</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This was the fourth and last milestone project I did during my studies 
                        at Code Institute. This project consists of an eCommerce website with 
                        argentine products, both the design and everything related to the website 
                        was as representative as possible of Argentina's culture.
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
                            src={jquery} 
                            alt="jQuery"
                            className="tech-used" fluid/>
                        <Image 
                            src={bootstrap} 
                            alt="bootstrap"
                            className="tech-used" fluid/>
                        <Image 
                            src={python} 
                            alt="python"
                            className="tech-used" fluid/>
                        <Image 
                            src={django} 
                            alt="django"
                            className="tech-used" fluid/>
                        <Image 
                            src={my_sql} 
                            alt="my_sql"
                            className="tech-used" fluid/>
                        <Image 
                            src={heroku} 
                            alt="heroku"
                            className="tech-used" fluid/>
                        <Image 
                            src={aws} 
                            alt="aws"
                            className="tech-used" fluid/>
                        <Image 
                            src={stripe} 
                            alt="stripe"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/4th-milestone-project-your-argentine-shop"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Your argentine shop repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://your-argentine-shop.herokuapp.com/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Your argentine shop website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
                <Col lg={6}
                    className="my-auto d-none d-lg-block d-xl-block d-xxl-bock">
                        <Image 
                            src={your_argentine_shop}
                            alt="Milestone 4"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
            </Row>
        </Fragment>
    )
}

export default Project4
