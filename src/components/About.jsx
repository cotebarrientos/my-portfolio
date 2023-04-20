import React, { useEffect } from 'react'
import '../assets/About.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {
    Container,
    Row,
    Col,
    Image
} from 'react-bootstrap'
import my_pic from '../img/my_pic.jpg'
import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import bootstrappic from '../img/bootstrap.png'
import django from '../img/django.png'
import firebase from '../img/firebase.png'
import flask from '../img/flask.png'
import heroku from '../img/heroku.png'
import jquery from '../img/jquery.png'
import material_ui from '../img/material_ui.png'
import mongodb from '../img/mongodb.png'
import my_sql from '../img/my_sql.png'
import python from '../img/python.png'
import reactjs from '../img/reactjs.png'
import reduxpic from '../img/reduxpic.png'
import figmapic from '../img/figma.png'
import sasspic from '../img/sass.png'
import phppic from '../img/php.png'
import wordpresspic from '../img/wordpress.png'

const About = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Container fluid
            id="aboutSection"
            className="site-background-color">
            <Container className="pt-4 pb-4">
                <Row>
                    <Col
                        xs={12}
                        lg={7}
                        className="text-light"
                    >
                        <h1 className="text-center font-outfit text-uppercase pt-3 web-title"
                            data-aos="fade-down">
                            About Me
                        </h1>
                        <hr className="mx-auto web-hr"
                            data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom" />
                        <p className="font-roboto pt-3 web-p"
                            data-aos="fade-up-right">

                            Hello everyone! My name is Maria, and I'm a Junior Full Stack Web Developer,
                            with a strong emphasis on <strong>Front-End development</strong> and <strong>web design</strong>.
                            I'm a very curious person, who loves a challenge and always wants to learn new skills, and that's one of
                            the reasons why I decided to switch from cosmetics and design into the IT area
                            <em className="ms-1 me-1">(I was previously a beautician/dressmaker).</em>
                        </p>
                        <p className="font-roboto pt-3 web-p"
                            data-aos="fade-up-right">

                            Before studying at Code Institute, I had taken some specialization courses on
                            <strong className="ms-1">Coursera </strong> about graphic design and Meteor JS,
                            which inspired my desire to change my career. This also motivated me to keep
                            learning by myself and to keep improving my programming skills. Currently,
                            I am continuing to learn by myself, diving deeper into the wonderful world
                            of computer science and I am actively doing mini projects and exercises,
                            which help me to improve every day. I am hoping someday to become an expert
                            in the area, especially in Front-End development.
                        </p>
                        <p className="font-roboto web-p"
                            data-aos="fade-up-right">
                            Here are a few technologies I've been working with recently:
                        </p>
                        <span>
                            <Image
                                src={html}
                                alt="html"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={css}
                                alt="css"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={sasspic}
                                alt="sass"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={javascript}
                                alt="javascript"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={jquery}
                                alt="jquery"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={phppic}
                                alt="php"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={wordpresspic}
                                alt="wordpress"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={python}
                                alt="python"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={flask}
                                alt="flask"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={django}
                                alt="django"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={reactjs}
                                alt="react js"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={reduxpic}
                                alt="redux"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={bootstrappic}
                                alt="bootstrap"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={material_ui}
                                alt="material ui"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={my_sql}
                                alt="mysql"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={mongodb}
                                alt="mongo db"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={heroku}
                                alt="heroku"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={firebase}
                                alt="firebase"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                            <Image
                                src={figmapic}
                                alt="figma"
                                className="skills-icons"
                                data-aos="flip-up" fluid />
                        </span>
                    </Col>
                    <Col
                        xs={12}
                        lg={5}
                        className="mx-auto my-auto"
                    >
                        <Image
                            src={my_pic}
                            alt="My pic"
                            className="about-me-pic p-2 shadow d-block mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            fluid />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About
