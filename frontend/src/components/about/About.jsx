import React from 'react'
import { Card, Row, Col, Image } from 'react-bootstrap'

function About() {
    return (
        <div>
            <Row className="background p-5 text-dark">
                <Col  sm={8}>
                <h4 className="text-dark">RAN-WD | Website Solutions</h4>
                    <Row className="p-2">
                        <Col sm={12}>
                            <h6>We Wil Help You All the way</h6>
                            <p className="text-dark m-2">
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's.
                            </p>
                        </Col>
                        <Col sm={12}>
                            <h6>How it works</h6>
                            <p className="text-dark m-2">
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's.
                            </p>
                        </Col>
                        <Col sm={12}>
                            <h6>Peace of mind</h6>
                            <p className="text-dark  m-2">
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's.
                            </p>
                        </Col>
                        <Col sm={12}>
                            <h6>Testimonials</h6>
                            <p className="text-dark  m-2">
                                Lorem Ipsum is simply dummy text of the printing 
                                and typesetting industry. Lorem Ipsum has been the 
                                industry's.
                            </p>
                        </Col>
                    </Row>
                    
                </Col>
                <Col sm={4}>
                <Image src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" fluid />
                   
               
                
                </Col>
            </Row>
        </div>
    )
}

export default About

