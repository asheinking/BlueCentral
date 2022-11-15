import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import About from './About'
import Experience from './Experience'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
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
                    </Nav>
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<About />} />
                <Route path='/Experience' element={<Experience />} />
            </Routes>
        </Router>
    )
}