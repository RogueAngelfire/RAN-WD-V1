import React from 'react'
import { Row, Col } from 'react-bootstrap'

import programmers from '../programmers'
import Programmer from '../components/programmer/Programmer.jsx'

function ProgrammerScreen() {
    return (
        <div>
            <h1 className="text-center mb-5">Our Team</h1>
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
