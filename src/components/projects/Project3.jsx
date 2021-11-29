import React from 'react'
import '../../assets/Portfolio.css'
import { 
    Row,
    Col,
    Image,
    Badge} from 'react-bootstrap'
import { GrGithub } from 'react-icons/gr'
import { FiGlobe } from 'react-icons/fi'
import my_veggie_food_website from '../../img/my_veggie_food_website.png'
import html from '../../img/html.png'
import css from '../../img/css.png'
import javascript from '../../img/javascript.png'
import bootstrap from '../../img/bootstrap.png'
import flask from '../../img/flask.png'
import heroku from '../../img/heroku.png'
import mongodb from '../../img/mongodb.png'
import python from '../../img/python.png'

const Project3 = () => {
    return (
        <>
            <Row className="mt-4 mb-4 info-background">
                <Col lg={6} 
                    className="my-auto">
                        <Image 
                            src={my_veggie_food_website}
                            alt="Milestone 3"
                            className="d-block mx-auto shadow web-image" 
                            fluid/>
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                            <Badge bg="dark shadow">My Veggie Food</Badge>
                    </h3>
                    <p className="font-exo project-description mt-4">
                        This is the third milestone project I did during my studies at Code Institute. 
                        The project consists of a website where users can create an account and there 
                        they can write a vegetarian recipe and share it with the community.
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
                            src={python} 
                            alt="python"
                            className="tech-used" fluid/>
                        <Image 
                            src={flask} 
                            alt="flask"
                            className="tech-used" fluid/>
                        <Image 
                            src={bootstrap} 
                            alt="bootstrap"
                            className="tech-used" fluid/>
                        <Image 
                            src={mongodb} 
                            alt="mongo db"
                            className="tech-used" fluid/>
                        <Image 
                            src={heroku} 
                            alt="heroku"
                            className="tech-used" fluid/>
                    </span>
                    <p className="mt-3 text-end">
                        <a 
                            href="https://github.com/cotebarrientos/3rd-milestone-project-my-veggie-food"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="My veggie food repository"
                            className="link-icons"
                        >
                            <GrGithub/>
                        </a>
                        <a
                            href="https://my-veggie-food-2020recipes.herokuapp.com/"
                            target="_blank" 
                            rel="noopener noreferrer"
                            title="My veggie food website"
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

export default Project3
