import React from 'react'
import "./Navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cartwidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="Navbar">
                <Container className='container'>
                    <Navbar.Brand href="#home" className='text-white p-2'>Titulo de la tienda</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="#link" className='text-white'>Link</Nav.Link>
                            <Link href="#home" className='text-white p-2' to={"/cart"}> {/*url*/}
                                <Cartwidget/>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header;

