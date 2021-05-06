import { Container } from 'react-bootstrap'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="App">    
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to All</h1>
          <p>I'd wish this would work</p>
          <p>Pain in the butt work!</p>

          <p>Welcome to the jungle</p>
          <p>We like ice cream</p>

          <p>Welcomee Nick has worked it outgit </p>

        </Container>
      </main>      
      <Footer />     
    </div>
  );
}

export default App;
