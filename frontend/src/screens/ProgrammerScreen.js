import React from 'react'
import { Row, Col } from 'react-bootstrap'

import programmers from '../programmers'

import Programmer from '../components/programmer/Programmer.jsx'

// Please have a look at programmers.map javascript function its one of 4 main javascript funciton
// try to memorise it or something for refrence this its like when in django template language we do
// {% for product in products %} and then product.name and this code was looping all products in database

function ProgrammerScreen() {
    return (
        <div>
            <h1 className="text-center mb-5 text-uppercase">Our Team</h1>
            <Row>
                {programmers.map(programmer => (
                    <Col key={programmer.id} sm={12} md={6} lg={4} xl={3}>
                        <Programmer programmer={programmer} />
                    </Col>
                ))}
            </Row>
            
        </div>
    )
}

export default ProgrammerScreen
