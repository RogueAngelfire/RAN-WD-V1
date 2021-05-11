import React from 'react'
import { Navbar, Nav, Container, Col, NavDropdown } from 'react-bootstrap'
import './header.style.css'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header>        
            <Navbar className="nav-background" expand="lg" collapseOnSelect>
                <Container>  
                <LinkContainer to='/'>
                    <Navbar.Brand>RAN-WD</Navbar.Brand>
                </LinkContainer>             
                    
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">                     
                            <Col sm={10}>
                                <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
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
                                    <LinkContainer to='/about'>
                                        <Nav.Link>About</Nav.Link>
                                    </LinkContainer>                       
                                    
                                    <Nav.Link href="">Contact</Nav.Link>                            
                                </Nav> 
                            </Col>
                            <Col sm={2}>
                            <LinkContainer to='/cart'>
                                <Nav.Link className="m-0 p-0 text-dark"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/user'>                               
                                <Nav.Link className="m-0 p-0 text-dark"><i className="fas fa-user"></i> Login</Nav.Link>     
                                </LinkContainer>
                                </Col>     
                        </Navbar.Collapse>                
                
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
