import React from 'react'
import { Link } from 'react-scroll'
import { Navbar as Appbar,
Container,
Nav} from 'react-bootstrap'

const Navbar = () => {
    return (
        <Appbar collapseOnSelect
            expand="lg"
            className="background-color mb-4 navbar-dark shadow" 
            sticky="top">
            <Container fluid>
            <Appbar.Brand 
            className="font-exo text-uppercase">
                <Link to="homeSection">Maria Barrientos</Link>
            </Appbar.Brand>
            <Appbar.Toggle aria-controls="responsive-navbar-nav" />
            <Appbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto text-uppercase font-outfit">
                    <Nav.Link className="ps-3 pe-3">
                        <Link
                        activeClass="active"
                        to="homeSection" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>Home</Link>
                    </Nav.Link>
                    <Nav.Link  href="#" className="ps-3 pe-3">About</Nav.Link>
                    <Nav.Link href="#" className="ps-3 pe-3">My Portfolio</Nav.Link>
                    <Nav.Link  href="#" className="ps-3 pe-3">Contact</Nav.Link>
                </Nav>
            </Appbar.Collapse>
            </Container>
        </Appbar>
    )
}

export default Navbar
