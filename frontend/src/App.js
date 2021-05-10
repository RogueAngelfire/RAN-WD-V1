import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import ProgrammersScreen from './screens/ProgrammerScreen'
import ProgrammerDetails from './screens/ProgrammerDetails'

import HomeScreen from './screens/HomeScreen'

function App() {
  return (
    <Router>    
      <Header />
      <main className="py-3">
        <Container>
        
        
        <Route path='/' component={HomeScreen} exact/>
        <Route path='/about' component={ProgrammersScreen} exact/>
        <Route path='/programmerdetails/:id' component={ProgrammerDetails} />


        </Container>
      </main>      
      <Footer />     
    </Router>
  );
}

export default App;
