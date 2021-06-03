import React, { useState, useEffect, useRef } from 'react'
import './App.css';

declare global {
  interface Window { VANTA: any, THREE: any }
}

window.VANTA = window.VANTA || {};
window.THREE = window.THREE || {};


function App() {
  const myRef = useRef(null);

  useEffect(() => {
    if (window.VANTA) window.VANTA.HALO({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 100.00,
      minWidth: 100.00,
      xOffset: 0,
      size: 1.00,
      backgroundColor: 0x0,
    })
  }, [])


  return (
    <div className="App" ref={myRef}>
      <header className="App-header">
          <h1>RENOISER</h1>
      </header>
    </div>
  );
}

export default App;
