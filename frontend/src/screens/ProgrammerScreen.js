import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProgrammers } from '../actions/programmerActions'
import { Row, Col } from 'react-bootstrap'
import Programmer from '../components/programmer/Programmer.jsx'
import Loader from '../components/loader/Loader.jsx'
import Message from '../components/message/Message.jsx'



// Please have a look at programmers.map javascript function its one of 4 main javascript funciton
// try to memorise it or something for refrence this its like when in django template language we do
// {% for product in products %} and then product.name and this code was looping all products in database

function ProgrammerScreen() {
    const dispatch = useDispatch()
    const programmerList = useSelector(state => state.programmerList)
    const { error, loading, programmers } = programmerList
    
 
    useEffect(() => {
        dispatch(listProgrammers())
    }, [dispatch])

    
    return (
        <div>
            <h1 className="text-center mb-5 text-uppercase">Our Team</h1>
            {loading ? <Loader />
                : error ? <Message variant="danger">{error}</Message>
                :
                <Row>
                {programmers.map(programmer => (
                    <Col key={programmer.id} sm={12} md={6} lg={4} xl={3}>
                        <Programmer programmer={programmer} />
                        
                    </Col>
                ))}
            </Row>
            }
           
           
         
            
        </div>
    )
}

export default ProgrammerScreen
