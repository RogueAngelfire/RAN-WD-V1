import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPricePlan } from '../actions/pricePlanActions'

import { Row, Col, Card, ListGroup, Image } from 'react-bootstrap';

import './PricePlanScreen.css';


function PricePlanScreen() {

    const dispatch = useDispatch()
    const pricePlanList = useSelector(state => state.pricePlanList)
    const { error, loading, PricePlan } = pricePlanList
    
 
    useEffect(() => {
        dispatch(listPricePlan())
    }, [dispatch])


    return (

        <div className="nav-background jumbotron priceplan" >

            
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
                    {PricePlan.map(pp =>(
                        <Col sm={6}>
                            <Card style={{ width: '16rem' }}>
                            <Card.Body>
                                <Card.Title>{pp.package_title}</Card.Title>
                                <Card.Text>
                                <ListGroup>
                            <ListGroup.Item>{pp.package_price}</ListGroup.Item>
                            <ListGroup.Item>{pp.package_description}</ListGroup.Item>
                            <ListGroup.Item>£{pp.hourly_rates}</ListGroup.Item>
                            </ListGroup>
                            </Card.Text>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
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
