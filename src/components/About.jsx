import React from 'react'
import '../assets/About.css'
import { 
    Container,
    Row,
    Col,
    Image} from 'react-bootstrap'

const About = () => {
    return (
        <Container fluid
            id="aboutSection">
                <Container>
                   <Row>
                        <Col xs={12} lg={8}>
                            <h1 className="text-center font-roboto text-uppercase pt-5">About Me</h1>
                            <hr className="mx-auto"/>
                            <p className="font-outfit pt-3">
                                Hello everyone! My name is Maria, and I'm a junior full stack software
                                developer, with a strong emphasis on Font-End development and a graduate 
                                from Code Institute. I'm a very curious person, who likes challenges and 
                                always wants to learn new skills, and that's one of the reasons why I 
                                decided to switch from cosmetics and design (I'm a beautician and dressmaker) 
                                to the IT area.
                            </p>
                            <p className="font-outfit pt-3">
                                Before studying at Code Institute, I had taken some specialization courses on 
                                Coursera about graphic design and Meteor JS, which were the beginning of my desire 
                                to change my career, and also motivated me to keep learning by myself and to keep 
                                improving my programming skills.Currently I continue learning by myself, knowing 
                                more about this wonderful world of computer science, and I am also very active 
                                doing mini projects and exercises, which help me to improve every day everything 
                                I already know, hoping someday to become an expert in the area, especially in 
                                Front-End development.
                            </p>
                            <p className="font-outfit">
                                These are some of the technologies I have learned over the years:
                            </p>
                            technologies here .....
                        </Col>
                        <Col xs={12} lg={4}>
                            Picture here.......
                        </Col>
                    </Row>
            </Container>
        </Container>
    )
}

export default About
