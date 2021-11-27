import React from 'react'
import { Link } from 'react-scroll'
import { Navbar as Appbar,
Container} from 'react-bootstrap'

const Navbar = () => {
    return (
        <Appbar collapseOnSelect
            expand="lg"
            className="background-color navbar-dark shadow" 
            sticky="top">
            <Container fluid>
            <Appbar.Brand 
            className="font-exo text-uppercase">
                <Link to="homeSection">Maria Barrientos</Link>
            </Appbar.Brand>
            <Appbar.Toggle aria-controls="responsive-navbar-nav" />
            <Appbar.Collapse id="responsive-navbar-nav">
                <ul className="navbar-nav ms-auto text-uppercase font-outfit">
                    <li className="nav-item ps-2 pe-2">
                        <Link
                        className="nav-link"
                        activeClass="active"
                        to="homeSection" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>Home</Link>
                    </li>
                    <li className="nav-item ps-2 pe-2">
                        <Link
                        className="nav-link"
                        activeClass="active"
                        to="#" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>About</Link>
                    </li>
                    <li className="nav-item ps-2 pe-2">
                        <Link
                        className="nav-link"
                        activeClass="active"
                        to="#" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>My Portfolio</Link>
                    </li>
                    <li className="nav-item ps-2 pe-2">
                        <Link
                        className="nav-link"
                        activeClass="active"
                        to="#" 
                        spy={true} 
                        smooth={true} 
                        duration={500}>Contact</Link>
                    </li>
                </ul>
            </Appbar.Collapse>
            </Container>
        </Appbar>
    )
}

export default Navbar
