import React from 'react'
import { Carousel } from 'react-bootstrap'
import Loader from '../loader/Loader'
import Message from '../message/Message.jsx'

function CarouselComponent({ programmer }) {
   
    return (
        <div>
        <h3 className="text-center">Projects Made By {programmer.name}.</h3>
        {programmer.projects.length === 0 
            ?
                <Message variant='info'>
                    Robin's Projects Need Updating In Database.
                </Message>
            : 
                <Carousel fade>
                    {programmer.projects.map((project) => (
                        <Carousel.Item className="text-dark">
                            <img
                            className="d-block w-100"
                            src={project.image}
                            alt="First slide"
                            />
                            <Carousel.Caption className="text-dark">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
        }
        
            
        </div>
    )
}

export default CarouselComponent
