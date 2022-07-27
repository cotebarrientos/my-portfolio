import React, { useEffect } from 'react'
import '../assets/Portfolio.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Container } from 'react-bootstrap'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'
import Project5 from './projects/Project5'
import Project6 from './projects/Project6'
import Project7 from './projects/Project7'
import Project8 from './projects/Project8'


const Portfolio = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Container fluid
            id="portfolioSection"
            className="site-background-color">
                <Container className="pt-4 pb-4 text-light">
                    <h1 className="text-center font-outfit text-uppercase pt-3 web-title" 
                        data-aos="fade-down"
                    >
                        My Portfolio
                    </h1>
                    <hr className="mx-auto web-hr" 
                        data-aos="fade-up" 
                        data-aos-anchor-placement="center-bottom"/>
                    <p className="font-roboto pt-3 mb-5 web-p" 
                        data-aos="fade-up" 
                        data-aos-anchor-placement="center-bottom">

                    In this section you will find the main projects I've done from Milestone projects 
                    for <strong>Code Institute</strong>, mini-projects I've done as part of exercises for 
                    the specialization courses I've taken at <strong>Udemy</strong>, to assignments completed 
                    for <em>the frontend development industry training course</em> imparted by <strong>Brainnest</strong>.

                    </p>

                    <Project1 />
                    <Project2 />
                    <Project3 />
                    <Project4 />
                    <Project5 />
                    <Project6 />
                    <Project7 />
                    <Project8 />
                </Container>
        </Container>
    )
}

export default Portfolio
