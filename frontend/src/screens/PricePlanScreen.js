import React from 'react'

import { Row, Col, Card, ListGroup, Image } from 'react-bootstrap';

import './PricePlanScreen.css';


function PricePlanScreen() {
    return (

        <div className="nav-background jumbotron priceplan" >
            <h1>Price Plans</h1> 
            
            <Row className="m-auto">
                <Col className="m-auto" sm={6}>
                <h2 class="">Price Plans</h2>
                    <h3> The Complete Breakdown</h3>
                    <p>We Pride ourselves at RAN to give you the best service possible implementing all the
                        latest technologies to give you best possible website. Our peace of mind service and
                        fullfil your requirements and go beyond to get your website presence established on the web
                        world stage of business. Offering eCommerce services with minimal transaction fees.
                    </p>
                    <Row className="text-white">
                        <Col sm={6}>
                            <Card style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>Static Websites from £375</Card.Title>
                                <Card.Text>
                                <ListGroup>
                            <ListGroup.Item>• You Get</ListGroup.Item>
                            <ListGroup.Item>• This</ListGroup.Item>
                            <ListGroup.Item>• That</ListGroup.Item>
                            <ListGroup.Item>• And the Other</ListGroup.Item>
                            <ListGroup.Item>• Plus hosting costs</ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6}>
                        <Card style={{ width: '16rem' }}>
                            <Card.Body>
                              <Card.Title>eCommerce Websites from £900</Card.Title>
                              <Card.Text>
                              <ListGroup>
                            <ListGroup.Item>• You Get</ListGroup.Item>
                            <ListGroup.Item>• This</ListGroup.Item>
                            <ListGroup.Item>• That</ListGroup.Item>
                            <ListGroup.Item>• And the Other</ListGroup.Item>
                            <ListGroup.Item>• Plus hosting costs</ListGroup.Item>
                            </ListGroup>
                                </Card.Text>
                            </Card.Body>
                            </Card>
                </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                    <Image className="priceimage" src="https://images.unsplash.com/photo-1527380992061-b126c88cbb41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2501&q=80" fluid />
                </Col>
            </Row>
        </div>   
    )
}

export default PricePlanScreen
