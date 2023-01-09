import Navbar from 'react-bootstrap/Navbar'
import { useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import PAbout from './PAbout'
import PExperience from './PExperience'
import PContact from './PContact'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function POverlayNav() {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    const handleClose = () => setMenuOpen(false)



    return (
        <Router>

            <Navbar collapseOnSelect key={"sm"} bg="primary" expand={"sm"} >
                <Container fluid>
                    <Navbar.Brand href="/">AH</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`}
                    onClick={toggleMenu}
                    />
                    
                    <Navbar.Offcanvas
                        className="offcanvasModal"
                        id={`offcanvasNavbar-expand-sm`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end"
                        show={menuOpen}
                        onHide={handleClose}
                        collapseOnSelect
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title style={{ font: "weight bold" }} id={`offcanvasNavbarLabel-expand-sm`}>
                                Alex Heinking
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link onClick={handleClose}  href="/">About</Nav.Link>
                                <Nav.Link onClick={handleClose} href="/Experience">Experience</Nav.Link>
                                <Nav.Link onClick={handleClose} href="/Contact">Contact</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                   
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<PAbout />} />
                <Route path='/Experience' element={<PExperience />} />
                <Route path="/Contact" element={<PContact />} />
            </Routes>
            {/*
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/">AH</Navbar.Brand>
                    <Nav>
                        <NavDropdown className="me-auto justify-content-end" title="image" id="basic-nav-dropdown">
                            <Link className='link' to={'/'}><NavDropdown.Item href="/">About</NavDropdown.Item></Link>
                            <Link to={'/Experience'}><NavDropdown.Item href="/Experience">Experience</NavDropdown.Item></Link>
                            <Link to={"/Contact"}><NavDropdown.Item href="/Contact">Contact</NavDropdown.Item></Link>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
            <Routes exact path='/'>
                <Route path='/' element={<PAbout />} />
                <Route path='/Experience' element={<PExperience />} />
                <Route path="/Contact" element={<PContact />} />
    </Routes>*/}
        </Router>
    )
}