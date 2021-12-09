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
import weather_app from '../../img/weather_app.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import material_ui from '../../img/material_ui.png'
import reactjs from '../../img/reactjs.png'
import storybookpic from '../../img/storybookpic.png'
import heroku from '../../img/heroku.png'

const Project7 = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 mb-4 info-background" data-aos="fade-right">
                <Col lg={6} 
                    className="my-auto">
                        <Image 
                            src={weather_app}
                            alt="Weather app"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">Weather App</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This mini project was the most complex exercise I did while I was 
                        studying React and Redux on Udemy. This project makes use of Storybook, 
                        some automatic tests, use of different hooks, Javascript libraries, 
                        among others. Also to get the information about the weather forecast, 
                        the data is requested from the OpenWeather API.
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
                            src={material_ui} 
                            alt="material ui"
                            className="tech-used" fluid/>
                        <Image 
                            src={storybookpic} 
                            alt="storybook"
                            className="tech-used" fluid/>
                        <Image 
                            src={heroku} 
                            alt="heroku"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/weather-app"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Weather app repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://weather-app-react-udemy.herokuapp.com/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="Weather app website"
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

export default Project7
