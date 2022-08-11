import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import HomePage from './components/HomePage'
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@material-ui/core/IconButton";

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <div className="Left-name">
            <span className="Left-name">
              <IconButton className="Home-icon">
                <Link style={{textDecoration: 'none'}} to={'/'} className='Link-icon'><HomeIcon fontSize='20000px' className="Home-icon"/></Link>
              </IconButton>
            
            <h3>Alex Heinking</h3>
            </span>
          </div>
          <div className="Routing-links">
            <Link to={'/' } className="Routes"><p className='Routes'>Home</p></Link>
            <Link to={'/About' } className="Routes"><p className='Routes'>About</p></Link>
            <Link to={'/Experience' } className="Routes"><p className='Routes'>Experience</p></Link>
            <Link to={'/Contact' } className="Routes"><p className='Routes'>Contact</p></Link>
          </div>
        
        </header>
        <Routes exact path='/'>
           <Route path='/' element={<HomePage />} />
           <Route path='/About' element={<About />} />
           <Route path='/Experience' element={<Experience />} />
           <Route path='/Contact' element={<Contact />} />
           <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
//<img src={logo} className="App-logo" alt="logo" /><Link to={'/'}><HomeIcon fontSize='20000px' className="Home-icon"/></Link>
export default App;
