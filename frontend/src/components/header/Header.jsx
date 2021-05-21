import React, { useEffect, useState}  from 'react'
import { Navbar, Nav, Container, Col, NavDropdown } from 'react-bootstrap'
import './header.style.css'
import { LinkContainer } from 'react-router-bootstrap'

export default class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        show: true,
        scrollPos: 0
      };
    }
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
      // console.log(document.body.getBoundingClientRect());
      this.setState({
        scrollPos: document.body.getBoundingClientRect().top,
        show: document.body.getBoundingClientRect().top > this.state.scrollPos
      });
    };

    render() {
        console.log(this.state);
        return <header className="Fixed">        
        <Navbar id="nav" variant="dark" className={this.state.show ? "active" : "hidden"} expand="lg" collapseOnSelect>
            <Container className="text-white">  
            <LinkContainer to='/'>
                <Navbar.Brand className="text-white">RAN-WEB CRAFTS</Navbar.Brand>
            </LinkContainer>                           
                <Navbar.Toggle variant="light"  aria-controls="basic-navbar-nav" />
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
                                <LinkContainer to='/pricePlan'>
                                    <Nav.Link>Price Plan</Nav.Link>
                                </LinkContainer> 
                                <Nav.Link href="">Portfolio</Nav.Link> 
                                <LinkContainer to='/about'>
                                    <Nav.Link>About</Nav.Link>
                                </LinkContainer>  
                                                     
                                
                                <Nav.Link href="">Contact</Nav.Link>                            
                            </Nav> 
                        </Col>
                        <Col sm={2}>
                        <LinkContainer to='/cart'>
                            <Nav.Link className="m-0 p-0  text-white"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/user'>                               
                            <Nav.Link className="m-0 p-0  text-white"><i className="fas fa-user"></i> Login</Nav.Link>     
                            </LinkContainer>
                            </Col>     
                    </Navbar.Collapse>                
            
            </Container>
        </Navbar>
    </header>;
      }
    }


