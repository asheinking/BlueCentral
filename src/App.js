import './App.css';
import React, {} from 'react';
import OverlayNav from './Browser/OverlayNav'
import POverlayNav from './Phone/POverlayNav'


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