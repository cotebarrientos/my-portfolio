import React from 'react'
import { Link } from 'react-scroll'
import { Navbar as Appbar,
Container,
Nav} from 'react-bootstrap'

const Navbar = () => {
    return (
        <Appbar className="background-color mb-4 shadow" sticky="top">
            <Container fluid>
            <Appbar.Brand 
            className="font-exo text-uppercase">
                <Link to="homeSection">Maria Barrientos</Link>
            </Appbar.Brand>
            <Nav className="ms-auto text-uppercase font-outfit">
                <Nav.Link>
                    <Link
                    activeClass="active"
                    to="homeSection" 
                    spy={true} 
                    smooth={true} 
                    duration={500}>Home</Link>
                </Nav.Link>
                <Nav.Link  href="#">About</Nav.Link>
                <Nav.Link href="#">My Portfolio</Nav.Link>
                <Nav.Link  href="#">Contact</Nav.Link>
            </Nav>
            </Container>
        </Appbar>
    )
}

export default Navbar
