import React from 'react'
import './technologies.style.css'
import {  Row, Col, Image } from 'react-bootstrap'

function Technologies() {
    return (
        <div>
            <Row className="technologies-row-bg p-5  d-flex align-items-center rounded mt-5">
                <Col className="m-auto" sm={8} md={7}>
                    <Image src="https://images.unsplash.com/photo-1597239451127-914cc6d50a1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80/100px250" fluid />
                </Col>
                <Col sm={4} md={5}>
                    <h3 className="text-center">Technologies Used</h3>
                    <div>
                        <p className="m-1 p-1">
                            <i class="fab fa-python i-technologies"></i>
                            <i class="fab fa-js i-technologies"></i>
                            <i class="fab fa-react i-technologies"></i>
                            <i class="fab fa-aws i-technologies"></i>
                            <i class="fab fa-html5 i-technologies"></i>
                            <i class="fab fa-css3 i-technologies"></i>
                            <i class="fab fa-slack i-technologies"></i>
                            <i class="fas fa-database i-technologies"></i>
                            <i class="fas fa-camera i-technologies"></i>
                            <i class="fab fa-stripe i-technologies"></i>
                            <i class="fab fa-paypal i-technologies"></i>
                        </p>
                        <p className="lead">
                            We help you all the way.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been 
                            the industry's standard dummy text ever since 
                            the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a 
                            type specimen book. It has survived not 
                            only five centuries, but also the leap 
                            into electronic typesetting.
                        </p>
                    </div>
                
                </Col>
                <Col sm={12}>
                    <h3 className="text-center text-uppercase">Afordable and Reliable</h3>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and 
                        scrambled it to make a type specimen book. It has 
                        survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially 
                        unchanged. It was popularised in the 1960s with the 
                        release of Letraset sheets containing Lorem Ipsum 
                        passages, and more recently with desktop publishing 
                        software like Aldus PageMaker including versions of 
                        Lorem Ipsum.
                    </p>
                </Col>
            </Row>
           
        </div>
    )
}

export default Technologies
