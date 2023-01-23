import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import About from './About'
import Resume from './Resume'
import Notepad from './Notepad'
import Contact from './Contact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles.scss'

export default function OverlayNav() {
    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AH</Navbar.Brand>
                        
                    <Nav className="me-auto">
                        <Nav.Link as={Link} className="link" to="/">About</Nav.Link>
                        <Nav.Link as={Link} to="/Resume">Resume</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/Notepad">Notepad</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<About />} />
                <Route path='/Resume' element={<Resume />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Notepad" element={<Notepad />} />
            </Routes>
        </Router>
    )
}