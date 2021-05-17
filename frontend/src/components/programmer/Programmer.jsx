import React from 'react'
import './programmer.style.css'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Programmer({ programmer }) {
    return (
        <div>
            <Card className="my-3 p-3 rounded">
                <Link to={`/programmerdetails/${programmer.id}`}>
                    <Card.Img src={programmer.image} />
                </Link>

                <Card.Body>
                    <Link to={`/programmerdetails/${programmer.id}`}>
                        <Card.Title as="div">
                            <strong>
                                {programmer.name}
                            </strong>
                        </Card.Title>
                    </Link>
                    <Card.Text as="div">
                        <div className="my-3">
                            {programmer.about}
                        </div>                    
                    </Card.Text>                
                </Card.Body>
            </Card>
        </div>
        
        
    )
}

export default Programmer
