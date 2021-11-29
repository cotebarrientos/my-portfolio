import React from 'react'
import '../assets/About.css'
import { 
    Container,
    Row,
    Col,
    Image} from 'react-bootstrap'
import my_pic from '../img/my_pic.jpg'
import html from '../img/html.png'
import css from '../img/css.png'
import javascript from '../img/javascript.png'
import bootstrap from '../img/bootstrap.png'
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

const About = () => {
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
                        <h1 className="text-center font-outfit text-uppercase pt-5 web-title">
                            About Me
                        </h1>
                        <hr className="mx-auto web-hr"/>
                        <p className="font-roboto pt-3 web-p">
                            Hello everyone! My name is Maria, and I'm a Junior Full Stack Software
                            Developer, with a strong emphasis on Font-End development and a graduate 
                            from <strong className="ms-1">Code Institute</strong>. I'm a very curious 
                            person, who likes challenges and always wants to learn new skills, and that's 
                            one of the reasons why I decided to switch from cosmetics and design 
                            <em className="ms-1 me-1">(I'm a beautician and dressmaker)</em> 
                            to the IT area.
                        </p>
                        <p className="font-roboto pt-3 web-p">
                            Before studying at Code Institute, I had taken some specialization courses on  
                            <strong className="ms-1">Coursera</strong> about graphic design and Meteor JS, 
                            which were the beginning of my desire to change my career, and also motivated 
                            me to keep learning by myself and to keep improving my programming skills. 
                            Currently I continue learning by myself, knowing more about this wonderful world 
                            of computer science, and I am also very active doing mini projects and exercises, 
                            which help me to improve every day everything I already know, hoping someday to 
                            become an expert in the area, especially in Front-End development.
                        </p>
                        <p className="font-roboto web-p">
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <span>
                            <Image 
                                src={html} 
                                alt="html"
                                className="skills-icons" fluid/>
                            <Image 
                                src={css} 
                                alt="css"
                                className="skills-icons" fluid/>
                            <Image 
                                src={javascript} 
                                alt="javascript"
                                className="skills-icons" fluid/>
                            <Image 
                                src={jquery} 
                                alt="jquery"
                                className="skills-icons" fluid/>
                            <Image 
                                src={python} 
                                alt="python"
                                className="skills-icons" fluid/>
                            <Image 
                                src={flask} 
                                alt="flask"
                                className="skills-icons" fluid/>
                            <Image 
                                src={django} 
                                alt="django"
                                className="skills-icons" fluid/>
                            <Image 
                                src={reactjs} 
                                alt="react js"
                                className="skills-icons" fluid/>
                            <Image 
                                src={reduxpic} 
                                alt="redux"
                                className="skills-icons" fluid/>
                            <Image 
                                src={bootstrap} 
                                alt="bootstrap"
                                className="skills-icons" fluid/>
                            <Image 
                                src={material_ui} 
                                alt="material ui"
                                className="skills-icons" fluid/>
                            <Image 
                                src={my_sql} 
                                alt="mysql"
                                className="skills-icons" fluid/>
                            <Image 
                                src={mongodb} 
                                alt="mongo db"
                                className="skills-icons" fluid/>
                            <Image 
                                src={heroku} 
                                alt="heroku"
                                className="skills-icons" fluid/>
                            <Image 
                                src={firebase} 
                                alt="firebase"
                                className="skills-icons" fluid/>
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
                            fluid />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default About
