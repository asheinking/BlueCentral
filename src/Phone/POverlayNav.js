import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import PAbout from './PAbout'
import PExperience from './PExperience'
import PContact from './PContact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function POverlayNav() {
    return (
        <Router>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AH</Navbar.Brand>
                    <NavDropdown className="me-auto" title="Dropdown" id="basic-nav-dropdown">
                    <Link className='link' to={'/'}><NavDropdown.Item href="/">About</NavDropdown.Item></Link>
                    <Link to={'/Experience'}><NavDropdown.Item href="/Experience">Experience</NavDropdown.Item></Link>
                    <Link to={"/Contact"}><NavDropdown.Item href="/Contact">Contact</NavDropdown.Item></Link>
                    </NavDropdown>
                   
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<PAbout />} />
                <Route path='/Experience' element={<PExperience />} />
                <Route path="/Contact" element={<PContact />} />
            </Routes>
        </Router>
    )
}