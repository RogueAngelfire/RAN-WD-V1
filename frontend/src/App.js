import { Container } from 'react-bootstrap'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import HeroSection from './components/hero-section/HeroSection.jsx'

function App() {
  return (
    <div className="App">    
      <Header />
      <main className="py-3">
        <Container>
        
        <HeroSection />


        </Container>
      </main>      
      <Footer />     
    </div>
  );
}

export default App;
