import React from 'react'
import '../assets/About.css'
import { 
    Container,
    Row,
    Col,
    Image} from 'react-bootstrap'
import my_pic from '../img/my_pic.jpg'

const About = () => {
    return (
        <Container fluid
            id="aboutSection">
                <Container>
                   <Row>
                        <Col 
                            xs={12} 
                            lg={7} 
                            className="text-light"
                        >
                            <h1 className="text-center font-outfit text-uppercase pt-5">About Me</h1>
                            <hr className="mx-auto"/>
                            <p className="font-roboto pt-3">
                                Hello everyone! My name is Maria, and I'm a Junior Full Stack Software
                                Developer, with a strong emphasis on Font-End development and a graduate 
                                from <strong className="ms-1">Code Institute</strong>. I'm a very curious 
                                person, who likes challenges and always wants to learn new skills, and that's 
                                one of the reasons why I decided to switch from cosmetics and design 
                                <em className="ms-1 me-1">(I'm a beautician and dressmaker)</em> 
                                to the IT area.
                            </p>
                            <p className="font-roboto pt-3">
                                Before studying at Code Institute, I had taken some specialization courses on  
                                <strong className="ms-1">Coursera</strong> about graphic design and Meteor JS, 
                                which were the beginning of my desire to change my career, and also motivated 
                                me to keep learning by myself and to keep improving my programming skills. 
                                Currently I continue learning by myself, knowing more about this wonderful world 
                                of computer science, and I am also very active doing mini projects and exercises, 
                                which help me to improve every day everything I already know, hoping someday to 
                                become an expert in the area, especially in Front-End development.
                            </p>
                            <p className="font-roboto">
                                These are some of the technologies I have learned over the years:
                            </p>
                            technologies here .....
                        </Col>
                        <Col 
                            xs={12} 
                            lg={5}
                            className="mx-auto my-auto d-block"
                        >
                            <Image 
                                src={my_pic}
                                alt="My pic"
                                className="about-me-pic m-2 shadow" 
                                fluid />
                        </Col>
                    </Row>
            </Container>
        </Container>
    )
}

export default About
