import React from 'react'
import '../../assets/Portfolio.css'
import { 
    Row,
    Col,
    Image,
    Badge} from 'react-bootstrap'
import { GrGithub } from 'react-icons/gr'
import { FiGlobe } from 'react-icons/fi'
import coronavirus_report_website from '../../img/coronavirus_report_website.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import jquery from '../../img/jquery.png'
import bootstrap from '../../img/bootstrap.png'


const Project2 = () => {
    return (
        <>
            <Row className="mt-4 mb-4 info-background">
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Coronavirus report</Badge>
                    </h3>
                    <p className="font-exo web-p mt-4">
                        This is the second milestone project I did during my studies at Code Institute.
                        This project consists of a web site which shows the coronavirus cases around the 
                        world through different charts. Unfortunately it's not working because the APIs 
                        used to query the information have been removed. 
                    </p>
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
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/2nd-milestone-project-coronavirus-report"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Coronavirus report repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://cotebarrientos.github.io/2nd-milestone-project-coronavirus-report/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Coronavirus report website"
                            className="link-icons"
                        >
                            <FiGlobe/>
                        </a>
                    </p>
                </Col>
                <Col lg={6} xs={12}
                    className="my-auto">
                        <Image 
                            src={coronavirus_report_website}
                            alt="Milestone 2"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
            </Row>
        </>
    )
}

export default Project2
