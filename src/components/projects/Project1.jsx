import React from 'react'
import '../../assets/Portfolio.css'
import { 
    Row,
    Col,
    Image,
    Badge} from 'react-bootstrap'
import { GrGithub } from 'react-icons/gr'
import { FiGlobe } from 'react-icons/fi'
import healhy_pet_website from '../../img/healhy_pet_website.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import bootstrap from '../../img/bootstrap.png'


const Project1 = () => {
    return (
        <>
            <Row className="mt-4 mb-4 info-background">
                <Col lg={6} xs={12}
                    className="my-auto">
                        <Image 
                            src={healhy_pet_website}
                            alt="Milestone 1"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Healthy Pet veterinary clinic</Badge>
                    </h3>
                    <p className="font-exo web-p mt-4">
                    This is my first milestone project that I did during my studies at Code 
                    Institute. This project consisted in making a static page (CSS and HTML) 
                    and as a theme I chose a veterinary clinic.
                    </p>
                    <br />
                    <p className="font-exo web-p mt-4">
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
                            src={bootstrap} 
                            alt="bootstrap"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/Milestone-Project-Healthy-Pet-Veterinary-Clinic"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Healthy pet veterinary clinic repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://cotebarrientos.github.io/Milestone-Project-Healthy-Pet-Veterinary-Clinic/index.html"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Healthy pet veterinary clinic website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
            </Row>
        </>
    )
}

export default Project1
