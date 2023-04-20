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
import { MdInfo } from "react-icons/md";

const ImportantNote = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <Fragment>
            <Row className="mt-4 note-background p-5" data-aos="fade-right">
                <Col lg={6} xs={8}
                    className="my-auto mx-auto">
                    <Image
                        src="https://github.com/cotebarrientos/cotebarrientos/blob/main/icons/cotebarrientos_hello_world.gif?raw=true"
                        alt="My gif picture"
                        className="d-block mx-auto shadow"
                        fluid />
                </Col>
                <Col lg={6} xs={12} className="my-auto">
                    <h3 className="font-exo mt-3 text-center">
                        <Badge bg="dark shadow">Important Note <MdInfo /></Badge>
                    </h3>
                    <p className='font-exo project-description text-center text-dark fs-4 mt-4'>
                        Currently, I'm working on <strong>a new website</strong> for my portfolio.
                    </p>
                </Col>
            </Row>
        </Fragment>
    )
}

export default ImportantNote