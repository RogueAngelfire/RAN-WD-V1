import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown, NavDropdownItems } from 'react-bootstrap'
import './header.style.css'

function Header() {
    return (
        <header>        
            <Navbar className="nav-background" expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">
                        RAN-WD
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Price Plans" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="">Portfolio</Nav.Link>                        
                            <Nav.Link href="">About</Nav.Link>
                            <Nav.Link href="">Contact</Nav.Link>
                            <Nav.Link href="">Cart</Nav.Link>
                            <Nav.Link href="">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
