import { Container } from 'react-bootstrap'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="App">    
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to the jungle</h1>
          <p>We like ice cream</p>
          <p>This is annoying!!</p>
        </Container>
      </main>      
      <Footer />     
    </div>
  );
}

export default App;
