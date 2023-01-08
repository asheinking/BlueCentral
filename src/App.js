import './App.css';
import React, {} from 'react';
import OverlayNav from './Browser/OverlayNav'
import POverlayNav from './Phone/POverlayNav'

// test

export default function App() {
  var isPhone = window.matchMedia("(max-width: 500px)").matches;
  
  React.useEffect(() => {
      function handleResize() {
        if(window.innerWidth < 500) this.isPhone = true;
        else this.isPhone = false;
      };
      window.addEventListener('resize', handleResize)

  })
  return isPhone ? <POverlayNav /> : <OverlayNav />
}
/*
class App extends Component {

  

  isPhone = window.matchMedia("(max-width: 500px)").matches;
  
  

  reportWindowSize = (event) => {
    if(window.innerWidth < 500) this.isPhone = true;
    else this.isPhone = false;
  };
  
  renderContent = () => {
    
    if(isMobile){
      return (
        <div className="App">
          <Router>
          <header className="App-header-mobile">
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
    else{
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

  render(){
    return this.renderContent();
  }
}
//<img src={logo} className="App-logo" alt="logo" /><Link to={'/'}><HomeIcon fontSize='20000px' className="Home-icon"/></Link>*/

