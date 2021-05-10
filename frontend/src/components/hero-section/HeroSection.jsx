import React from 'react'
import './hero.css'
import { Jumbotron, Button } from 'react-bootstrap'

function HeroSection() {
    return (
        <div>
        <Jumbotron >
        <h1 className="text-center">WEBSITE SOLUTION</h1>
        <p className="text-center">
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p className="text-center">
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
        </div>
    )
}

export default HeroSection
