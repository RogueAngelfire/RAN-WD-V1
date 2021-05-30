import React from 'react'
import './hero.css'
import { Jumbotron, Button } from 'react-bootstrap'
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {
    opacity: 0,
    
  },
  visible: {
    opacity: 1,
    x: 0,
    transition:{
      type: 'spring',
      delay: 0.5
    }
  }
}


function HeroSection() {
    return (
        <motion.div className="hero-section-div-bg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        <Jumbotron className="margin-top hero-section-jumbotron-bg">
        <motion.h1 className="text-center"
        initial={{ y:-250, }}
        animate={{ y:-10, }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        >
          WEBSITE SOLUTION
        </motion.h1>
        <p className="text-center lead">
          We build static and e-commerce sites. We provide solutions for updating and old sites
          and building new sites. Our aim is to create interaactive and fast websites for our customers.
        </p>
        <p className="text-center">
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
        </motion.div>
    )
}

export default HeroSection
