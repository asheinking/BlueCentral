import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import About from './About'
import Experience from './Experience'
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
                        <Link className='link' to={'/'}><Nav.Link className="link"href="/">About</Nav.Link></Link>
                        <Link to={'/Experience'}><Nav.Link href="/Experience">Experience</Nav.Link></Link>
                        <Link to={"/Contact"}><Nav.Link href="/Contact">Contact</Nav.Link></Link>
                    </Nav>
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<About />} />
                <Route path='/Experience' element={<Experience />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}