import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Image, Row, Col, ListGroup, Button, Card } from 'react-bootstrap'
import programmers from '../programmers'
import CarouselComponent from '../components/carousel/CarouselComponent.jsx'

function ProgrammerDetails({ match }) {

    // Although this all will change once django api is in position
    // But understanding concept here is important if you check programmer.jsx component
    // I have Link and in to I am giving this page URl and then id 
    // I am using that ID to find correct programmer from the page.
    // programmer.find is one of the 4 main function of javascript this is second we are using
    // first one was .map that we have used inside ProgrammersScreen.js screen I have refrenced and
    // it there and explain what it does and find one is as its name implies and we are finiding product
    // by its id, I think best it to memorise it or copy paste everytime when its required.
    const programmer = programmers.find((programmer) => programmer.id === match.params.id)
    return (
        <div>  
            <Link to='/about' className="btn btn-light my-3">
                <i class="fas fa-hand-point-left"></i> Go Back
            </Link>         
            <Jumbotron>         
                <Row className="m-auto">
                    <Col sm={8} className="m-auto">                    
                        <h1 className="mb-4">{programmer.name}</h1>
                        <p> 
                            {programmer.about}
                        </p>
                        <h5>
                            <strong><i class="fas fa-crown"></i> Speciality: </strong> { programmer.speciality }
                        </h5>
                    </Col>
                    <Col sm={4}>
                        <Image src={programmer.image} alt={programmer.name} fluid />
                    </Col>
                </Row>
            </Jumbotron>
            <h3 className="text-center">Projects Made By {programmer.name}</h3>
            <CarouselComponent programmer={programmer} />
        </div>
    )
}

export default ProgrammerDetails
