import React from 'react'
import './contactForm.style.css'
import { Row, Col, Form } from 'react-bootstrap'

function ContactForm() {
    return (
        <div>
            <Row className="mt-5 mb-2 contact-our-team-row-bg">
                <Col sm={12}>
                    <h2 className="text-uppercase text-center">CONTACT OUR TEAM</h2>
                </Col>
            </Row>
            <Row className="contact-us-form-row p-5 d-flex align-items-center rounded">
                <Col sm={12}>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="bg-dark p-2 rounded"><i class="fas fa-users"></i> Full Name</Form.Label>
                            <Form.Control type="email" placeholder="e.g. John Doe" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="bg-dark p-2 rounded"><i class="fas fa-envelope-open"></i> Email</Form.Label>
                            <Form.Control type="email" placeholder="e.g. john_doe@hotmail.com" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label className="bg-dark p-2 rounded"><i class="fas fa-phone"></i> Contact Number</Form.Label>
                            <Form.Control type="tel" placeholder="074436534152 or 01642618987" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="bg-dark p-2 rounded"><i class="fas fa-envelope-open-text"></i> Your Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="We want you to built website ofr us etc." />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default ContactForm
