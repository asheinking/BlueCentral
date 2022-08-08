import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TestComponent from './components/TestComponent'
import HomePage from './components/HomePage'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <div className="Left-name">
            <span className="Left-name">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Alex Heinking</h3>
            </span>
          </div>
          <div className="Routing-links">
            

            <Link to={'/welcome' } className="Routes"><p className='Routes'>Home</p></Link>
            <Link to={'/TestComponent' } className="Routes"><p className='Routes'>test</p></Link>
          </div>
        
        
          
          
        
        </header>
        <Routes>
           <Route exact path='/welcome' element={<HomePage />} />
           <Route path='/TestComponent' element={<TestComponent />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
