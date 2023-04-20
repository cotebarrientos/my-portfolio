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
import el_tokio_website from '../../img/el-tokio-mockup.jpg'
import html from '../../img/html.png'
import css from '../../img/css.png'
import bootstrap from '../../img/bootstrap.png'
import wordpresspic from '../../img/wordpress.png'
import phppic from '../../img/php.png'
import javascript from '../../img/javascript.png'
import jquery from '../../img/jquery.png'


const ElTokio = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-right">
                <Col lg={6} xs={12}
                    className="my-auto">
                    <Image
                        src={el_tokio_website}
                        alt="El Tokio's Website"
                        className="d-block mx-auto shadow web-image"
                        fluid />
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                        <Badge bg="dark shadow">El Tokio's Website</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        El Tokio Restaurant is located in <strong>San Antonio de Areco, Argentina</strong>. The website
                        was built using WordPress, by creating a custom theme and was deployed and hosted on
                        <strong className='ms-2'>Mesi's hosting</strong>.
                    </p>
                    <br />
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
                            alt="jquery"
                            className="tech-used" fluid />
                        <Image
                            src={bootstrap}
                            alt="bootstrap"
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
                            href="https://eltokio.com.ar/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="El Tokio's website"
                            className="link-icons"
                        >
                            <FiGlobe />
                        </a>
                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ElTokio