import React from 'react'
import HeroSection from '../components/hero-section/HeroSection.jsx'
import Technologies from '../components/technologies/Technologies.jsx'
import { Container } from 'react-bootstrap'
import About from '../components/about/About.jsx'
import ContactForm from '../components/contactForm/ContactForm.jsx'

function HomeScreen() {
    return (
        <div>
            <Container>
                <HeroSection />
                <About />
                <Technologies/>
                <ContactForm/>
            </Container>
        </div>
    )
}

export default HomeScreen
