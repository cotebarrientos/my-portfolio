import React from 'react'
import '../assets/Portfolio.css'
import { Container } from 'react-bootstrap'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'


const Portfolio = () => {
    return (
        <Container fluid
            id="portfolioSection"
            className="site-background-color">
                <Container className="pt-4 pb-4 text-light">
                    <h1 className="text-center font-outfit text-uppercase pt-3 web-title">
                        My Portfolio
                    </h1>
                    <hr className="mx-auto web-hr"/>
                    <p className="font-roboto pt-3 mb-5 web-p">
                    In this section you will find the main projects that I've done this last time, 
                    from Milestone projects for <strong>Code Institute</strong>, to mini projects 
                    that I did as part of exercises for the specialization courses that I've taken 
                    at <strong>Udemy</strong>.
                    </p>
                    <Project1 />
                    <Project2 />
                    <Project3 />
                    <Project4 />
                </Container>
        </Container>
    )
}

export default Portfolio
