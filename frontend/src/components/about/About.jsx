import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'
import './about.style.css'
function About() {
    return (
        <div>
            <Row className="p-5 about-row-background text-dark d-flex align-items-center rounded">
                <Col sm={12}>
                    <h3 className="text-success text-center">RAN <span className="text-danger">WEB</span> <span className="text-warning">CRAFTS</span></h3>
                </Col>
                <Col  sm={8}>
                
                    <Row className="p-2">
                        <Col className="mt-2" sm={12}>
                            <Card className="card-1 text-white">
                                <Card.Body>
                                    <Card.Title>We Wil Help You All the way</Card.Title>
                                    <Card.Text>
                                        We know how to help you to boost you bussisness and get more customers.
                                    </Card.Text>                            
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-2" sm={12}>
                            <Card className="card-2 text-white">
                                <Card.Body>
                                    <Card.Title>How it works</Card.Title>
                                    <Card.Text>
                                        We understand depths of e-market and we are happy to disscuss and
                                        explain how to boost your bussisness.
                                    </Card.Text>                            
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-2" sm={12}>
                            <Card className="card-3 text-white">
                                <Card.Body>
                                    <Card.Title>Peace of mind</Card.Title>
                                    <Card.Text>
                                        Security and reliabilty features in our sites are going to give you all that 
                                        peact that you required.
                                    </Card.Text>                            
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mt-2" sm={12}>
                            <Card className="card-4 text-white">
                                <Card.Body>
                                    <Card.Title>Testimonials</Card.Title>
                                    <Card.Text>
                                        You are going to be our first client and once we are making website for you. 
                                        You will be first one to give us testimonial.
                                    </Card.Text>                            
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    
                </Col>
                
                <Col sm={4}>
                    <Row>
                    <Col className="mt-2" sm={12}>
                            <h6 className="p-2 text-white lead text-center rounded">We are Listening</h6>
                        </Col>
                        <Col sm={12}>
                            <Image className="image" src="https://images.unsplash.com/photo-1608127347890-3fd1d0323b3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=588&q=80" fluid />
                        </Col>
                        <Col className="mt-2" sm={12}>
                            <h6 className="text-white lead p-2 text-center rounded" >Innovative and Clean</h6>
                        </Col>
                    
                        <Col className="mt-2 d-flex justify-content-center" sm={12}>                                     
                            <Card style={{ width: '18rem' }}>
                        
                                <Card.Img className="image" variant="top" src="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80/100px180?text=Image cap" />
                            </Card>
                        </Col>
                </Row>
               
               
                   
                
                </Col>
            </Row>
        </div>
    )
}

export default About

