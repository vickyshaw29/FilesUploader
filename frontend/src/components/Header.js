import React, { useState ,useEffect} from 'react'
import { Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'


const Header = () => {
 
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" collapseOnSelect >
                <Container>
                <Navbar.Brand>File Uploader</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      
                        <Nav className="">
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ marginBottom: '10em' }}></div>
        </header>
    )
}

export default Header
