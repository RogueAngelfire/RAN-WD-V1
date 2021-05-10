import React from 'react'
import './hero.css'
import { Jumbotron, Button } from 'react-bootstrap'

function HeroSection() {
    return (
        <div>
        <Jumbotron >
        <h1 className="text-center">WEBSITE SOLUTION</h1>
        <p className="text-center">
          We build static and e-commerce sites. We provide solutions for updating and old sites
          and building new sites. Our aim is to create interaactive and fast websites for our customers.
        </p>
        <p className="text-center">
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
        </div>
    )
}

export default HeroSection
