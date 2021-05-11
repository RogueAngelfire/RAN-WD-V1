import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarouselComponent({ programmer }) {
    return (
        <div>
        <Carousel fade>
            <Carousel.Item className="text-dark">
                <img
                className="d-block w-100"
                src={programmer.project_image_1}
                alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                <h3>{programmer.name}</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="text-dark">
                <img
                className="d-block w-100"
                src={programmer.project_image_2}
                alt="Second slide"
                />

                <Carousel.Caption className="text-dark"> 
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="text-dark">
                <img
                className="d-block w-100"
                src={programmer.project_image_3}
                alt="Third slide"
                />

                <Carousel.Caption className="text-dark">
                <h3 className="text-dark">Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        </div>
    )
}

export default CarouselComponent
