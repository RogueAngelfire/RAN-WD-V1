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


          <h1>Welcome to the jungle</h1>
          <p>We like ice cream</p>

          <p> Can you see this?</p>

          <h1>Welcomee Nick has worked it outgit </h1>

          <h2>Welcome Nick has worked it out git </h2>
          <h2>I wish Robin worked it out</h2>
          <p>Test for writing git pull instructions</p>

        </Container>
      </main>      
      <Footer />     
    </div>
  );
}

export default App;
