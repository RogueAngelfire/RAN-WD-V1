import { Container } from 'react-bootstrap'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

function App() {
  return (
    <div className="App">    
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcomee</h1>
        </Container>
      </main>      
      <Footer />     
    </div>
  );
}

export default App;
