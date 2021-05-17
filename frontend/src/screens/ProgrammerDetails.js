import React, {useState, useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Jumbotron, Image, Row, Col, Card } from 'react-bootstrap'
import { listProgrammerDetails } from '../actions/programmerActions'

import CarouselComponent from '../components/carousel/CarouselComponent.jsx'

import Loader from '../components/loader/Loader'
import Message from '../components/message/Message.jsx'


function ProgrammerDetails({ match }) {
        const dispatch = useDispatch()
        const programmerDetails = useSelector( state => state.programmerDetails )
        const { loading, error, programmer } = programmerDetails

        useEffect(() => {
            dispatch(listProgrammerDetails(match.params.id))
          
        }, [])
    // Although this all will change once django api is in position
    // But understanding concept here is important if you check programmer.jsx component
    // I have Link and in to I am giving this page URl and then id 
    // I am using that ID to find correct programmer from the page.
    // programmer.find is one of the 4 main function of javascript this is second we are using
    // first one was .map that we have used inside ProgrammersScreen.js screen I have refrenced and
    // it there and explain what it does and find one is as its name implies and we are finiding product
    // by its id, I think best it to memorise it or copy paste everytime when its required.

    return (

        <div>  
            <Link to='/about' className="btn btn-light my-3">
                <i className="fas fa-hand-point-left"></i> Go Back
            </Link>   
        
            {loading ? 
                <Loader/>
                : error
                ? <Message variant="danger">{error}</Message>
                :(
                    <CarouselComponent programmer={programmer} />
                )
            }
            <h5 className="mt-5 bg-light text-uppercase text-dark p-1 text-center">Programmer Qualifications</h5>
            <Row>                
                {programmer.qualifications.map((qualificaiton) => (
                    <Col sm={6} className="text-white">
                        <Card key={qualificaiton.id} className="my-3 p-3 rounded bg-warning text-dark">
                        <Card.Body>                        
                            <Card.Title as="div">
                                <h4>
                                    {qualificaiton.title}
                                </h4>
                            </Card.Title>
                            
                            <Card.Text as="div">
                                <div className="my-3">
                                <h5>{qualificaiton.level}</h5>                            
                                </div>                    
                            </Card.Text>                
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>

            <h5 className="mt-5 bg-light text-uppercase text-dark p-1 text-center">Programmer Expertiese</h5>
            <Row>                
                {programmer.expertise.map((experty) => (
                    <Col sm={6} className="text-white">
                        <Card key={experty.id} className="my-3 p-3 rounded bg-warning text-dark">
                        <Card.Body>                        
                            <Card.Title as="div">
                                <h4>
                                    {experty.language}
                                </h4>
                            </Card.Title>
                            
                            <Card.Text as="div">
                                <div className="my-3">
                                <h5>{experty.level}</h5>                            
                                </div>                    
                            </Card.Text>                
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            
            
        </div>
    )
}

export default ProgrammerDetails
